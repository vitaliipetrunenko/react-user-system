const express = require('express');
const cors = require('cors');
const crypto = require("crypto")
const app = express();

const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Admin:AdminAdmin@cluster0.chefr.mongodb.net/ReactUsersDB?retryWrites=true&w=majority";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
mongoClient.setMaxListeners(1);
function newTokenGen(){
    const now = new Date();
    return({
        token: crypto.randomBytes(20).toString('hex') , 
        expiry: now.getTime() + 1000000000
    })
}

app.use(express.json());
const corsOptions={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}
app.use(cors(corsOptions));


app.use('/login', (req, res) => {
    if(req.method==="PUT"){
        
        let newToken = newTokenGen();
        console.log(newToken);
        submitTokenToDB(req.body.email,newToken)
        
        
       
        res.send(newToken)
    }
    else if(req.method==="PATCH"){
        let token = req.body
        getUserByToken(token.token , token.expiry).then(results =>{
            
            if(results.length===1){  
            res.send(results[0]);
            }
            else{
                res.send({});
            }
    
        })
        

    }
    else if(req.method==="POST"){
   
    let credentials = req.body
    getUser(credentials.username , credentials.password).then(results =>{
        
        if(results.length===1){
            let newToken = newTokenGen();
            submitTokenToDB(credentials.username,newToken)
        res.send([newToken,results[0].role]);
        }
        else{
            res.send([{},{}]);
        }

    })}
    
});

app.use('/register', (req, res) => {
    
    let user = req.body
    regUser(req.body).then(results =>{
        
        res.send(results);
    })
    
});



app.use('/admin', (req, res) => {
    
    if(req.method==="POST"){
    
    getAllUsers().then(results =>{
        
        res.send(results);
    })
}else if(req.method==="PATCH"){
    
    changeUser(req.body.user).then(results =>{
        res.send(results);
        
    })
}
else if(req.method==="DELETE"){
    deleteUser(req.body.user).then(results =>{
        res.send(results);
        
    })
}
});

app.use('/profiles', (req, res) => {
    if(req.method==="POST"){
    let email = req.body.email
    getProfiles(req.body).then(results =>{
        
        
        res.send(results);
        
        

    })
}
else if(req.method==="PUT"){
    addProfile(req.body).then(results =>{
        res.send(results);
    })
}
else if(req.method==="PATCH"){
    changeProfile(req.body).then(results =>{
        res.send(results);
        
    })
}
else if(req.method==="DELETE"){
    deleteProfile(req.body).then(results =>{
        res.send(results);
        
    })
}
});

app.use('/stats', (req, res) => {
    
    
    getStats().then(results =>{
       
        res.send(results);
    })
    
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/'));



function getUser(mail,password) {
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Users");
        return collection.find({email: mail, password : password}).toArray()
    }
    ).then(results => {
        
        return results
    });
}

function getStats() {
    let responseArray=[];
    let db;
    let collection;
    return mongoClient.connect().then(client => {
        db = client.db("ReactUsersDB");
        collection = db.collection("Users");
        return collection.find().toArray()
    }
    ).then(results => {
        responseArray.push(results.length)
        collection = db.collection("Profiles");
        return collection.find().toArray()
    }).then(results => {
        responseArray.push(results.length)
        return collection.find({"age" : {$gte : 18}}).toArray()
    }).then(results=>{
        responseArray.push(results.length)
        return responseArray
    });
}

function getAllUsers() {
    let db;
    
    return mongoClient.connect().then(client => {
        db = client.db("ReactUsersDB");
        let collection = db.collection("Users");
        return collection.find().toArray()
    }
    ).then(results => {
        return results
    
    });
}


function getUserByToken(token,expiry) {
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Users");
        return collection.find({token:{token:token,expiry:expiry} }).toArray()
    }
    ).then(results => {
        
        return results
    });
}

function regUser(user) {
    let collection;
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        collection = db.collection("Users");
        return collection.find( {email:user.username}).toArray()
    }
    ).then(results => {
        let newUser ={
            name:user.name,
            password:user.password,
            email:user.username,
            role:user.role
        }
      
       if(results.length === 0){
           
           return collection.insertOne(newUser)
            
    }
        else return false
    });
}

function submitTokenToDB(mail,token){
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Users");
        return collection.updateOne({email: mail}, {"$set":{"token":token }})
})}
function getProfiles(email){
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Profiles");
        return collection.find({author: email.email}).toArray()
    }
    ).then(results => {
       
        return results
    });

}
function addProfile(profile){
    let collection
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        collection = db.collection("Profiles");
        return collection.findOne(profile)
    }
    ).then(results => {
        
       if(!results){
        return collection.insertOne(profile)
       }
       else return false
    });

}
function changeProfile(profiles){
    const newProfile = profiles[0]
    const oldProfile = profiles[1]
    let collection
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        collection = db.collection("Profiles");
        return collection.findOne(oldProfile)
    }
    ).then(results => {
        
       if(results){
        return collection.updateOne(oldProfile,{$set:newProfile})
       }
       else return false
    });

}
function changeUser(users){
    const newUser = users[0]
    const oldUser = users[1]
 
    let collection
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        collection = db.collection("Users");

        return collection.findOne(oldUser)
    }
    ).then(results => {
 
       if(results){
        return collection.updateOne(oldUser,{$set:newUser})
       }
       else return false
    });

}
function deleteProfile(profile){
    let collection
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        collection = db.collection("Profiles");
        return collection.deleteOne(profile)
    }
    ).then(results => {
      
        return results
       
    });

}
function deleteUser(user){
    let collection
    return mongoClient.connect().then(client => {
        const db = client.db("ReactUsersDB");
        collection = db.collection("Users");
        return collection.deleteOne(user)
    }
    ).then(results => {
        return results
    });

}