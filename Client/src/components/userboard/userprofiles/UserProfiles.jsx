import { connect } from "react-redux"
import React, { useEffect, useState } from 'react'
import {setProfilesAC} from './../../../redux/actionCreators'

import { getProfiles } from "../../../App"

import styl from './UserProfiles.module.css'
import ProfileBoxHOC from "./ProfileBox"
import { Add, Check, Close, MathPlus } from "css.gg"


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
        <div>
        Welcome, {props.currUser.email}!<br/>
        Browsing, {(props.wantedUser ? props.wantedUser : props.currUser.email)} profiles </div>

        
        {operation === "ADD" ? <form onSubmit={handleSubmit} >
        <label>
          <p>Name</p>
          <input type="text" name='name' onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          <p>Surname</p>
          <input type="text" name='surname' onChange={e => setSurname(e.target.value)}/>
        </label>
        <label>
          <p>Age</p>
          <input type="number" name='age' onChange={e => setAge(parseInt(e.target.value))}/>
        </label>
        <div>
          <button type="submit" className={styl.submitButton}>Submit</button>
          <button className={styl.submitButton} onClick={()=>{setOperation("NONE")}}>Cancel</button>
        </div>
      </form> : <button className={styl.addButton} id="ADD"  value="ADD" onClick={e => setOperation(e.target.value)}><Add/>Add Profile</button> }
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
    



let ContainerUserProfiles = connect(mapStateToProps,{setProfilesAC})(UserProfiles)
export default ContainerUserProfiles 