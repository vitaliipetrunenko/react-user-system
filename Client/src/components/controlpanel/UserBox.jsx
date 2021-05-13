import React,{ useState} from 'react';
import {connect} from 'react-redux'
import {fetchUsers} from './ControlPanel'
import styl from './../userboard/userprofiles/UserProfiles.module.css'
import { NavLink } from 'react-router-dom';
import { Check, Close, Pen, Trash } from 'css.gg'


function UserBox(props) {
     
    const [operation, setOperation] = useState("NONE");
    const [name, setName] = useState(props.user.name);
    const [mail, setMail] = useState(props.user.email);
    const [role, setRole] = useState(props.user.role);
  
    const handleSubmit = async e => {
        e.preventDefault();
        if(operation === 'EDIT'){
            const changeUserResult = await fetchUsers(
                "PATCH", [{name,email:mail,role},{name:props.user.name,email:props.user.email,role:props.user.role}]
            )

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

        if(changeUserResult===false){
            alert("profile not deleted")
        }
        fetchUsers().then((result)=>{
            setOperation("NONE")
            props.setUsers(result)
            
          })
    
    
  }

    }

    

   if(props.currUser.role === 'ADMIN'){
    //
    const questionButtons = [(<button type="submit" name="okay"><Check/>Okay</button>),(<button value="NONE" onClick={e => setOperation("NONE")}><Close/> Cancel</button>),null,null]
    const defaultButtons =[null,null,(<button value="EDIT" name="edit" onClick={e=>setOperation("EDIT")}><Pen/>Edit</button>),(<button value="DELETE" name="delete" onClick={e=>setOperation("DELETE")}><Trash/>Delete</button>)]
    
    let chosenButtons = [];
    
    if(operation ==="NONE") chosenButtons=defaultButtons    
    else chosenButtons=questionButtons

    let boxValues = []

    const inputAreas =[(<textarea value={name} name="name" onChange={e => setName(e.target.value)}/>),(<textarea value={mail} onChange={e => setMail(e.target.value)}/>),( <select  id="roles" onChange={(e) => setRole(e.target.value)} name="roles"><option value="USER">USER</option><option value="ADMIN">ADMIN</option></select>)]
    const defaultNames=[(props.user? props.user.name: "Loading"),(props.user ? props.user.email: "Loading"),( props.user ? props.user.role: "Loading")]

    if(operation ==="EDIT") boxValues=inputAreas
    else boxValues=defaultNames
    //
  return(<div className={styl.box}>
        <p>
        <NavLink name="user" to={{
   pathname:'/userprofiles',
   state: {wantedProfile:props.user.email}  
 }}><img alt={""} src='http://mymbs.co.id/public/upload/image/user/user.png'></img></NavLink></p>
    <form onSubmit={handleSubmit} >
    <span>Name: {boxValues[0]}</span>
    <span>Mail: {boxValues[1]}</span>
    <span>Role: {boxValues[2]}</span>
    {operation==="DELETE" ? (<span>Are You sure?<br/></span>) : null}
    <div>
    {chosenButtons}
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
