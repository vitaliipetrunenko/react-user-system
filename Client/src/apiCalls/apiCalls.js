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
  
  export function  getStats(){
    alert("alert")
    return fetch('/api/stats', {
      method: 'GET',
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