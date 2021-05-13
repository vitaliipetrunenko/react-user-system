import { Backspace, Check, Close, Pen, Trash } from 'css.gg';
import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { getProfiles } from '../../../App';
import {setProfilesAC} from '../../../redux/actionCreators'
import { profileChange } from './UserProfiles';
import styl from './UserProfiles.module.css'

 function ProfileBox(props) {
    const [operation, setOperation] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [age, setAge] = useState();
    
    useEffect(() => {
        setOperation("NONE")
        setName(props.name)
        setSurname(props.surname)
        setAge(props.age)
      },[])

    const handleSubmit = async e => {
        e.preventDefault();
        if(operation === 'EDIT'){
            const changeProfileResult = await profileChange(
                [{name,surname,age,author:props.author},{name:props.name,surname:props.surname,age:props.age,author:props.author}],"PATCH"
            )

            if(changeProfileResult===false){
                alert("duplicate profile")
            }
        getProfiles(props.currUser).then((result)=>{
            props.setProfilesAC(result)
            setOperation("NONE")
          })
        
        
      }
      else if(operation === 'DELETE'){
        const changeProfileResult = await profileChange(
            {name:props.name,surname:props.surname,age:props.age,author:props.author},"DELETE"
        )

        if(changeProfileResult===false){
            alert("profile not deleted")
        }
    getProfiles(props.currUser).then((result)=>{
        props.setProfilesAC(result)
        setOperation("NONE")
        
      })
    
    
  }
  else if(operation === 'CANCEL'){
        setName(props.name)
        setAge(props.age)
        setSurname(props.surname)
        setOperation("NONE")
  }
    }

    console.log("operation on render ",operation)
    //if((props.author===props.wantedUser && props.author===props.currUser.email)|| (props.author===props.wantedUser && props.currUser.role==="ADMIN")){
    return(
        <div className={styl.box}>
        
            <p><a><img alt={""} src={'http://mymbs.co.id/public/upload/image/user/user.png'}></img></a></p>
            <form onSubmit={handleSubmit} >
            <span>Name: { operation==="EDIT" ?<textarea value={name} name="name" onChange={e => setName(e.target.value)}/>:(props.name ? props.name: "Loading")}</span>
            <span>Surname: {operation==="EDIT"? <textarea value={surname} onChange={e => setSurname(e.target.value)}/>: (props.surname ? props.surname: "Loading")}</span>
            <span>Age: {operation==="EDIT"? <textarea type="number" value={age} onChange={e => setAge(parseInt(e.target.value))}/>: ( props.age ? props.age: "Loading")}</span>
            {operation==="DELETE" ? (<span>Are You sure?<br/></span>) : null}
            <div>
            {operation!=="NONE" ? <button type="submit" name="okay"><Check/>Okay</button> :null}
            {operation!=="NONE" ? null : <button value="EDIT" name="edit" onClick={e=>setOperation(e.target.value)}><Pen/>Edit</button>}
            {operation!=="NONE" ? null : <button value="DELETE" name="delete" onClick={e=>setOperation(e.target.value)}><Trash/>Delete</button>}
            {operation!=="NONE" ? <button value="NONE" onClick={e => setOperation("NONE")}><Close/> Cancel</button> : null}
            </div>
            </form>
        </div>

    )
   // }
   // else return(null)
}

let mapStateToProps = (state,ownProps) => ({

}) 
 
let ProfileBoxHOC = connect(mapStateToProps,{setProfilesAC})(ProfileBox)
export default  ProfileBoxHOC;
