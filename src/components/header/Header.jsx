import React from 'react'
import { NavLink } from 'react-router-dom'
import styl from './Header.module.css'

export default  function Header(props){
    return(
        <div className={styl.Header}>
        
        <NavLink to={{
   pathname:'/',
   state: {wantedProfile:props.currUser.email}  
 }}>PROFILES</NavLink>
            
            {props.currUser.role === 'ADMIN' ? <NavLink to="/control">Control</NavLink>:null}
            <button onClick={()=>{props.clearToken()}}>Log Out</button>


        </div>
    )


    


}