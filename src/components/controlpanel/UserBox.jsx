import React,{ useEffect, useState} from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from './ControlPanel'
import styl from './../userboard/userprofiles/UserProfiles.module.css'
import { NavLink } from 'react-router-dom';


function UserBox(props) {
     
    const [operation, setOperation] = useState();
    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [role, setRole] = useState();
    
    useEffect(() => {
        setOperation("NONE")
        setName(props.user.name)
        setMail(props.user.email)
        setRole(props.user.role)
      },[])

    const handleSubmit = async e => {
        e.preventDefault();
        if(operation === 'EDIT'){
            const changeUserResult = await fetchUsers(
                "PATCH", [{name,email:mail,role},{name:props.user.name,email:props.user.email,role:props.user.role}]
            )
            console.log("CHANGEUSERRESULT :", changeUserResult )
            if(changeUserResult===false){
                alert("duplicate user")
            }
            fetchUsers("POST").then((result)=>{
            
            props.setUsers(result) })
            setOperation("NONE")
         
        
        
      }
      else if(operation === 'DELETE'){
        const changeUserResult = await fetchUsers(
            "DELETE", {name:props.user.name,email:props.user.email,role:props.user.role}
        )
        console.log("CHANGEUSERRESULT :", changeUserResult )
        if(changeUserResult===false){
            alert("profile not deleted")
        }
        fetchUsers().then((result)=>{
            setOperation("NONE")
            props.setUsers(result)
            
          })
    
    
  }
  else if(operation === 'CANCEL'){
        setName(props.user.name)
        setMail(props.user.email)
        setRole(props.user.role)
        setOperation("NONE")
  }
    }



   if(props.currUser.role === 'ADMIN'){
  return(<div className={styl.box}>
        
        <NavLink to={{
   pathname:'/userprofiles',
   state: {wantedProfile:props.user.email}  
 }}>USER</NavLink>
    <form onSubmit={handleSubmit} >
    <span>Name: { operation==="EDIT" ?<textarea value={name} onChange={e => setName(e.target.value)}/>:(props.user? props.user.name: "Loading")}</span>
    <span>Mail: {operation==="EDIT"? <textarea value={mail} onChange={e => setMail(e.target.value)}/>: (props.user ? props.user.email: "Loading")}</span>
    <span>Role: {operation==="EDIT"? <select  id="roles" onChange={(e) => setRole(e.target.value)} name="roles">
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>: ( props.user ? props.user.role: "Loading")}</span>
    {operation==="DELETE" ? (<span>Are You sure?<br/></span>) : null}
    <div>
    {operation!=="NONE" ? <button type="submit" name="okay">Okay</button> :null}
    {operation!=="NONE" ? null : <button value="EDIT" onClick={e=>setOperation(e.target.value)}>Edit</button>}
    {operation!=="NONE" ? null : <button value="DELETE" name="delete" onClick={e=>setOperation(e.target.value)}>Delete</button>}
    {operation!=="NONE" ? <button type="submit" value="CANCEL" onClick={e => setOperation(e.target.value)}>Cancel</button> : null}
    </div>
    </form>
</div>
  );
   }
   else return (<span>You have no access to this data.</span>)
}

let mapStateToProps = (state,ownProps) => ({
    currUser:state.authData.currUser

})

let UserBoxHOC =connect(mapStateToProps,{})(UserBox)
export default UserBoxHOC
