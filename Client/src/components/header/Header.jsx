import { Controller, Eye, Home, LogOff, LogOut } from 'css.gg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styl from './Header.module.css'

export default  function Header(props){
    return(
        <div className={styl.Header}>
        <div className={styl.User}><img alt={""} src={"http://mymbs.co.id/public/upload/image/user/user.png"}></img>{props.currUser.email}</div>
        <div className={styl.Buttons}>
        <NavLink to={{
   pathname:'/',
   state: {wantedProfile:props.currUser.email}  
 }}><Home/>Home</NavLink>
            
            {props.currUser.role === 'ADMIN' ? <NavLink to="/control"><Eye/>Control</NavLink>:null}
            <a onClick={()=>{props.clearToken()}}><LogOff/>Log Out</a>

            </div>
        </div>
    )


    


}