import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import UserBoxHOC from './UserBox';
import styl from './../userboard/userprofiles/UserProfiles.module.css'
import Dashboard from '../dashboard/Dashboard';

export async function fetchUsers(method,user=null) {
 
  return fetch('http://localhost:8080/admin', {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
  })
    .then(data => data.json()).catch(err =>{return err})
 }


 function ControlPanel(props) {
  
   const [Users,setUsers]=useState();
   useEffect(()=>{
     setUsers([])
      const getUserList = fetchUsers("POST").then(result =>{

        setUsers(result)


      })

   },[])
   if(props.currUser.role === 'ADMIN' && Users){
     
     let UserList = [...Users].map((e,i) => <UserBoxHOC key={Users[i]._id} setUsers={setUsers} user={Users[i]}/>)
  return(<div>
    
    <h2>ControlPanel</h2>
    <Dashboard/>
    <div className={styl.boxGrid}>{UserList}</div>
    </div>
  );
   }
   else return (<span>You have no access to this page.</span>)
}

let mapStateToProps = (state) => ({
  currUser:state.authData.currUser

})

let ControlPanelHOC =connect(mapStateToProps,{})(ControlPanel)
export default ControlPanelHOC