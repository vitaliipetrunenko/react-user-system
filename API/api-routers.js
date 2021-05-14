var express = require('express');
var router = express.Router();
const cors = require('cors');

const apiFunc = require("./api-functions")





router.use(express.json());
const corsOptions={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}
router.use(cors(corsOptions));


router.use('/login', (req, res) => {
    if(req.method==="PUT"){
        
        let newToken = apiFunc.newTokenGen();
        console.log(newToken);
        apiFunc.submitTokenToDB(req.body.email,newToken).then((result) =>{
            
            
        })
        res.send(newToken)

        
        
       
        
    }
    else if(req.method==="PATCH"){
        let token = req.body
        apiFunc.getUserByToken(token.token , token.expiry).then(results =>{
            
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
    apiFunc.getUser(credentials.username , credentials.password).then(results =>{
        
        if(results.length===1){
            let newToken = apiFunc.newTokenGen();
            apiFunc.submitTokenToDB(credentials.username,newToken)
        res.send([newToken,results[0].role]);
        }
        else{
            res.send([{},{}]);
        }

    })}
    
});

router.use('/register', (req, res) => {
    
    let user = req.body
    apiFunc.regUser(req.body).then(results =>{
        
        res.send(results);
    })
    
});



router.use('/admin', (req, res) => {
    
    if(req.method==="POST"){
    
        apiFunc.getAllUsers().then(results =>{
        
        res.send(results);
    })
}else if(req.method==="PATCH"){
    
    apiFunc.changeUser(req.body.user).then(results =>{
        res.send(results);
        
    })
}
else if(req.method==="DELETE"){
    apiFunc.deleteUser(req.body.user).then(results =>{
        res.send(results);
        
    })
}
});

router.use('/profiles', (req, res) => {
    if(req.method==="POST"){
    let email = req.body.email
    apiFunc.getProfiles(req.body).then(results =>{
        
        
        res.send(results);
        
        

    })
}

else if(req.method==="PUT"){
    apiFunc.addProfile(req.body).then(results =>{
        res.send(results);
    })
}
else if(req.method==="PATCH"){
    apiFunc.changeProfile(req.body).then(results =>{
        res.send(results);
        
    })
}
else if(req.method==="DELETE"){
    apiFunc.deleteProfile(req.body).then(results =>{
        res.send(results);
        
    })
}
});

router.use('/stats', (req, res) => {
    
    console.log("stage2")
    apiFunc.getStatsAPI().then(results =>{
       console.log(results)
        res.send(results);
    })
    
});




module.exports = router;
