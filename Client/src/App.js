import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import useToken from './hooks/useToken';
import Userboard,{AdminUserboard} from './components/userboard/Userboard';
import {connect } from 'react-redux';
import { setTokenAC, setUserAC, setProfilesAC } from './redux/actionCreators';
import Header from './components/header/Header';
import ControlPanelHOC from './components/controlpanel/ControlPanel';
import AuthFormHOC from './components/forms/LoginForm';
import { getProfiles, loadUserFromToken } from './apiCalls/apiCalls';




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
        }
      })

      
    }
      },[]
  )
 
  if (token && token.expiry < (new Date()).getTime()) {
    clearToken()
  }
  if(!token ) {
    
    return <AuthFormHOC  setToken={setToken} />
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
