import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser, regUser,getProfiles, profileChange } from "../../apiCalls/apiCalls";
import PropTypes from "prop-types";
import { setUserAC, setProfilesAC } from "../../redux/actionCreators";
import { connect } from "react-redux";
import FormikMaterialTextField from "./common/FormikMaterialTextField";
import styl from "./styles/Login.module.css";
import { Button, Radio } from "@material-ui/core";
import { OfflinePinSharp } from '@material-ui/icons/'


function validate (values,operation){
    const errors={};
    if (!values.name) {
     errors.name = 'Required';
   } else if (
    !/^[A-Z0-9._%+-]{2,}$/i.test(values.name)
   ) {
     errors.name = 'Invalid name';
   }
   if (!values.surname){
    errors.surname = 'Required';
   } else if (
    !/^[A-Z0-9._%+-0-9]{2,}$/i.test(values.surname)
  ) {
    errors.surname = 'Invalid surname';
  }
  if (!values.age){
    errors.age = 'Required';
   } else if (
    !/^[0-9]{1,}$/i.test(values.age)) {
    errors.age = 'Invalid age';
  }
   return errors;
}

async function profileProcess(profile,User,setProfilesACprop){
        console.log("User:",User)
        const addProfileResult = await profileChange(
            {name:profile.name,surname:profile.surname,age:profile.age,author:User},"PUT"
        )
        if(addProfileResult===false){
            alert("duplicate profile")
        }
        getProfiles(User).then((result)=>{
            setProfilesACprop(result)
          })
}

const ProfileForm = (props) => {
  
  return (
    <Formik 
      initialValues={{ name: "", surname: "", age: "" }}
      validate={(values)=>validate(values)}
      onSubmit={ async (profile) => profileProcess(profile,props.User,props.setProfilesAC)}
    >
      
        
          <Form>
            <div>
            Name:<br/>
            <FormikMaterialTextField name="name" /><br/>
  
            </div>

            <div>
            Surname:<br/>
            <FormikMaterialTextField name="surname" /><br/>
         
            </div>

            <div>
            Age:<br/>
            <FormikMaterialTextField type="number" name="age" /><br/>
         
            </div> 
           
            <Button type="submit"> <OfflinePinSharp />  </Button>
          </Form>
        

    </Formik>
  );
};

let mapStateToProps = (state, ownProps) => ({
    state: state,
  });
  let ProfileFormHOC = connect(mapStateToProps, { setProfilesAC })(ProfileForm);
export default ProfileFormHOC;