export async function loginUser(credentials, method) {
    return fetch("/api/login", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
  
  export async function regUser(credentials, method) {
    return fetch("/api/register", {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

 export async function fetchUser(token) {

    return fetch('/api/login', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(token)
    })
      .then(data => data.json()).catch(err =>{return err})
   }
  
 export function loadUserFromToken(token){
    return fetchUser(token).then((result,err)=>{
      
      if (!err){
  
      
      return result
      }
      else {
        return false
      }
      
      
    })
  
    
  }
  
  export async function  getProfiles(email){
    return fetch('/api/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:email})
    })
      .then(data => data.json())
  }
  
  export async function profileChange(profile,method) {
    return fetch('/api/profiles', {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
      .then(data => data.json())
   }

   export function  getStats(){
    return fetch('/api/stats',{method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body:null
  }).then(data => 
        data.json())
  }

  export async function fetchUsers(method,user=null) {
 
    return fetch('/api/admin', {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
      .then(data => data.json()).catch(err =>{return err})
   }