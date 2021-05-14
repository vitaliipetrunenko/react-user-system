import { connect } from "react-redux"
import React, { useEffect, useState } from 'react'
import {setProfilesAC} from './../../../redux/actionCreators'

import { getProfiles, profileChange } from "../../../apiCalls/apiCalls"

import styl from './UserProfiles.module.css'
import ProfileBoxHOC from "./ProfileBox"
import { Add } from "css.gg"
import { Button, TextField } from "@material-ui/core"
import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/Check';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';





function UserProfiles(props){
    const [operation, setOperation] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [age, setAge] = useState();
    
    let username=(props.wantedUser? props.wantedUser: props.currUser.email);

    useEffect(() => {
        props.setProfilesAC([])
            if(props.wantedUser){
                getProfiles(props.wantedUser).then(profiles =>{

                    props.setProfilesAC(profiles)
                })
                

            }
            else{

                getProfiles(props.currUser.email).then(profiles =>{

                    props.setProfilesAC(profiles)
                })
            }
    },[username])

    const handleSubmit = async e => {
        
        e.preventDefault();
        if(operation ==="ADD"){
            const addProfileResult = await profileChange(
                {name,surname,age,author:(props.wantedUser ? props.wantedUser : props.currUser.email)},"PUT"
            )

            if(addProfileResult===false){
                alert("duplicate profile")
            }
            getProfiles(username).then((result)=>{
                props.setProfilesAC(result)
                setOperation("NONE")
              })
        }
      }

    
        
       
     
    let userboxes = [...props.profileList].map(el => <ProfileBoxHOC  key={el._id} currUser={(props.wantedUser ? props.wantedUser : props.currUser.email)} name={el.name} surname={el.surname} age={el.age} author={el.author}/>)
return(
    <div>
        <div className={styl.Userboard}>
        <div name="Greeting">
        Welcome, {props.currUser.email}!<br/>
        Browsing, {(props.wantedUser ? props.wantedUser : props.currUser.email)} profiles </div>

        
        {operation === "ADD" ? <form onSubmit={handleSubmit} >
        <label>
          <p>Name</p>
          <TextField type="text" name='name' onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          <p>Surname</p>
          <TextField type="text" name='surname' onChange={e => setSurname(e.target.value)}/>
        </label>
        <label>
          <p>Age</p>
          <TextField type="number" name='age' onChange={e => setAge(parseInt(e.target.value))}/>
        </label>
        <div>
          <Button type="submit" className={styl.submitButton}>Submit<CheckIcon/></Button>
          <Button /*className={styl.submitButton}*/ onClick={()=>{setOperation("NONE")}}>Cancel<CancelIcon/></Button>
        </div>
      </form> : 
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