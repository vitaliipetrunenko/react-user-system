import { Check, Close, Pen, Trash } from 'css.gg';
import React,{useState} from 'react';
import {connect} from 'react-redux';
import { getProfiles } from '../../../App';
import {setProfilesAC} from '../../../redux/actionCreators'
import { profileChange } from './UserProfiles';
import styl from './UserProfiles.module.css'

 function ProfileBox(props) {
    const [operation, setOperation] = useState("NONE");
    const [name, setName] = useState(props.name);
    const [surname, setSurname] = useState(props.surname);
    const [age, setAge] = useState(props.age);
    
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

    }
    const questionButtons = [(<button type="submit" name="okay"><Check/>Okay</button>),(<button value="NONE" onClick={e => setOperation("NONE")}><Close/> Cancel</button>),null,null]
    const defaultButtons =[null,null,(<button value="EDIT" name="edit" onClick={e=>setOperation("EDIT")}><Pen/>Edit</button>),(<button value="DELETE" name="delete" onClick={e=>setOperation("DELETE")}><Trash/>Delete</button>)]
    
    let chosenButtons = [];
    
    if(operation ==="NONE") chosenButtons=defaultButtons    
    else chosenButtons=questionButtons

    let boxValues = []

    const inputAreas =[(<textarea value={name} name="name" onChange={e => setName(e.target.value)}/>),(<textarea value={surname} onChange={e => setSurname(e.target.value)}/>),(<textarea type="number" value={age} onChange={e => setAge(parseInt(e.target.value))}/>)]
    const defaultNames=[(props.name ? props.name: "Loading"),(props.surname ? props.surname: "Loading"),(props.age ? props.age: "Loading")]

    if(operation ==="EDIT") boxValues=inputAreas
    else boxValues=defaultNames

    return(
        <div className={styl.box}>
        
            <p><a><img alt={""} src='http://mymbs.co.id/public/upload/image/user/user.png'></img></a></p>
            <form onSubmit={handleSubmit} >
            <span>Name: {boxValues[0]}</span>
            <span>Surname: {boxValues[1]}</span>
            <span>Age: {boxValues[2]}</span>
            {operation==="DELETE" ? (<span>Are You sure?<br/></span>) : null}
            <div>
            {chosenButtons}
            </div>
            </form>
        </div>

    )

}

let mapStateToProps = (state,ownProps) => ({

}) 

let ProfileBoxHOC = connect(mapStateToProps,{setProfilesAC})(ProfileBox)
export default  ProfileBoxHOC;
