import React,{useEffect, useState} from 'react';
import ContainerUserProfiles from './userprofiles/UserProfiles';
import {useLocation} from 'react-router-dom'
import styl from './Userboard.module.css';

export default function Userboard(props) {
    
   /* */
    
  return(<div >
  <div >
    <h2 name="Userboard">Userboard</h2>
    </div>
    <ContainerUserProfiles wantedUser={props.state.authData.currUser ? props.state.authData.currUser.email : null} />
    </div>

  );
}

export function AdminUserboard(props) {
    let location = useLocation();

      const [wantedUser, setWantedUser] = useState();
      useEffect(()=>{
        setWantedUser(location.state.wantedProfile)
      },[])
      
    return(
        <div>
         <div>
    <h2 name="Adminboard">Admin Userboard</h2>
    </div>
    <ContainerUserProfiles wantedUser={wantedUser ? wantedUser : null} />
    </div>
    )
}