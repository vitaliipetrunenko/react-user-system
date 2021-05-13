import React,{useEffect, useState} from 'react';
import HocUserProfiles from './userprofiles/UserProfiles';
import {useLocation} from 'react-router-dom'


export default function Userboard(props) {
    
  return(<div >
  
    <HocUserProfiles wantedUser={props.state.authData.currUser ? props.state.authData.currUser.email : null} />
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

    <HocUserProfiles wantedUser={wantedUser ? wantedUser : null} />
    </div>
    )
}