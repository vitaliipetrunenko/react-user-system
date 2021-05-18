import { connect } from "react-redux"
import React, { useEffect, useState } from 'react'
import {setProfilesAC} from './../../../redux/actionCreators'

import { getProfiles, profileChange } from "../../../apiCalls/apiCalls"

import styl from './UserProfiles.module.css'
import ProfileBoxHOC from "./ProfileBox"

import { Button, TextField } from "@material-ui/core"
import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/Check';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ProfileFormHOC from "../../forms/ProfileForm"



function validateProfile(){


}



function UserProfiles(props){
    const [operation, setOperation] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [age, setAge] = useState();
    const [errors,setErrors] = useState();
    console.log("UserProfilesUser and curruser", props.User,props.currUser.email)
    let username=(props.User? props.User : props.currUser.email);

    useEffect(() => {
        props.setProfilesAC([])
           
                getProfiles(username).then(profiles =>{
                    console.log("setting from userProfiles")
                    props.setProfilesAC(profiles)
                })
            
    },[username])    
        
     
    let userboxes = [...props.profileList].map(el => <ProfileBoxHOC  key={el._id} currUser={username} name={el.name} surname={el.surname} age={el.age} author={el.author}/>)
return(
    <div>
        <div className={styl.Userboard}>
        <div name="Greeting">
        Welcome, {props.currUser.email}!<br/>
        Browsing, {(username)} profiles </div>

        
        {operation === "ADD" ? <div>
        <ProfileFormHOC User={username}></ProfileFormHOC>
          <Button onClick={()=>{setOperation("NONE")}}><CancelIcon/></Button>
        </div>

       : 
      <Button  id="ADD"  value="ADD" onClick={e => setOperation("ADD")}> Add Profile <CreateIcon/></Button> }
          </div>
        <div className={styl.boxGrid}>{userboxes}</div>
    </div>
)

}

let mapStateToProps = (state,ownProps) => {
    
        return({
            currUser:state.authData.currUser, 
            profileList:state.profileData.currProfiles
        })
    }
    



let HocUserProfiles = connect(mapStateToProps,{setProfilesAC})(UserProfiles)
export default HocUserProfiles 