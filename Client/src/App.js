import React, { useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import ControlPanel from './components/controlpanel/ControlPanel';
import useToken from './hooks/useToken';
import Userboard,{AdminUserboard} from './components/userboard/Userboard';
import { Provider,connect } from 'react-redux';
import store from './redux/redux-store'
import { setTokenAC, setUserAC, setProfilesAC } from './redux/actionCreators';
import Header from './components/header/Header';
import ControlPanelHOC from './components/controlpanel/ControlPanel';


async function fetchUser(token) {

  return fetch('http://localhost:8080/login', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(token)
  })
    .then(data => data.json()).catch(err =>{return err})
 }

function loadUserFromToken(token){
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
  return fetch('http://localhost:8080/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:email})
  })
    .then(data => data.json())
}

export function  getStats(){
  return fetch('http://localhost:8080/stats', {
    method: 'GET',
  })
    .then(data => data.json())
}


function AppMain(props) {
 
  const { token, setToken, clearToken, renewToken, getToken } = useToken();
  useEffect(()=>{
      if(token){
      loadUserFromToken(getToken()).then((result)=>{
        if(!result.token){
          clearToken()
        }
        else{

          props.setUserAC(result)
          props.setTokenAC(renewToken(result.token,result.email))

          getProfiles(result.email).then((result)=>{
            props.setProfilesAC(result)
          })
          
          
        }
      })

      
    }
      },[]
  )
 
  if (token && token.expiry < (new Date()).getTime()) {
    clearToken()
  }
  if(!token ) {
    
    return <Login  setToken={setToken} />
  }
  else{

    
  return (
    
      <div className="wrapper">
        
        
        <BrowserRouter>
          <Header currUser={props.state.authData.currUser} clearToken={clearToken}/>
          <Switch>
          <Route exact path="/">
              <Userboard  state={props.state}  clearToken={clearToken} />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/control">
              <ControlPanelHOC />
            </Route>
            <Route path="/userprofiles">
              <AdminUserboard />
            </Route>
          </Switch>
        </BrowserRouter>
        
      </div>
      
    );
  }
}

let mapStateToProps = (state) =>({
  state:state
})

const App = connect(mapStateToProps,{setUserAC,setTokenAC,setProfilesAC})(AppMain)
export default App;
