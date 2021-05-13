const crypto = require("crypto")
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Admin:AdminAdmin@cluster0.chefr.mongodb.net/ReactUsersDB?retryWrites=true&w=majority";
const mongoClient = new MongoClient(url, { useNewUrlParser: true,useUnifiedTopology: true });
//mongoClient.setMaxListeners(1);
const dbClient = mongoClient.connect()
function getClient(){
    return dbClient
}

module.exports = {
        client: mongoClient,
     newTokenGen : function(){
        const now = new Date();
        return({
            token: crypto.randomBytes(20).toString('hex') , 
            expiry: now.getTime() + 1000000000
        })
    },

getUser : function(mail,password) {
    
    return getClient().then(client => {
        
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Users");
        return collection.find({email: mail, password : password}).toArray().then(result => {
            return result
        })
    }
    ).then(results => {
        
        return results
    });
},
//TODO CLOSE
getStatsAPI : function() {
    let responseArray=[];
    let db;
    console.log("stage 5")
    return getClient().then(client => {
        
        db = client.db("ReactUsersDB");
        const collection = db.collection("Users");
        return collection.find().toArray()
    }
    ).then(results => {
        responseArray.push(results.length)
        const collection = db.collection("Profiles");
        return collection.find().toArray()
    }).then(results => {
        responseArray.push(results.length)
        const collection = db.collection("Profiles");
        return collection.find({"age" : {$gte : 18}}).toArray().then(results=>{
            return results
        })
    }).then(results=>{
        
        responseArray.push(results.length)
        return responseArray
    });
},

 getAllUsers : function() {
    
    return getClient().then(client => {
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Users");
        return collection.find().toArray().then(results => {return results})
    }
    ).then(results => {
        return results
    
    });
},


getUserByToken : function (token,expiry) {
   
    return getClient().then(client => {
        
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Users");
        return collection.find({token:{token:token,expiry:expiry} }).toArray().then(results => {return results})
    }
    ).then(results => {
        
        return results
    });
},

regUser : function (user) {
    let collection;
    return getClient().then(client => {
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
           
           return collection.insertOne(newUser).then((result) => {
            
            return result
           })
           
            
    }
        else {
            return false
        }
    }).then(results => {
        
        return results
    });
},

submitTokenToDB : function (mail,token){
    return getClient().then(client => {
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Users");
        return collection.updateOne({email: mail}, {"$set":{"token":token }}).then((results) =>{
            return true
        })
})},
 getProfiles : function(email){
    return getClient().then(client => {
        const db = client.db("ReactUsersDB");
        const collection = db.collection("Profiles");
        return collection.find({author: email.email}).toArray()
    }
    ).then(results => {
        
        return results
    });

},
addProfile : function(profile){
    let collection
    return getClient().then(client => {
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

},
changeProfile : function (profiles){
    const newProfile = profiles[0]
    const oldProfile = profiles[1]
    let collection
    return getClient().then(client => {
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

},
 changeUser : function(users){
    const newUser = users[0]
    const oldUser = users[1]
 
    let collection
    return getClient().then(client => {
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

},
 deleteProfile : function(profile){
    let collection
    return getClient().then(client => {
        const db = client.db("ReactUsersDB");
        collection = db.collection("Profiles");
        return collection.deleteOne(profile)
    }
    ).then(results => {
        
        return results
       
    });

},
 deleteUser : function(user){
    let collection
    return getClient().then(client => {
        const db = client.db("ReactUsersDB");
        collection = db.collection("Users");
        return collection.deleteOne(user)
    }
    ).then(results => {
        
        return results
    });

}

}