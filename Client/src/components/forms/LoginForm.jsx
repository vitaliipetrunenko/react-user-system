import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser, regUser,getProfiles } from "../../apiCalls/apiCalls";
import PropTypes from "prop-types";
import { setUserAC, setProfilesAC } from "../../redux/actionCreators";
import { connect } from "react-redux";
import FormikMaterialTextField from "./common/FormikMaterialTextField";
import styl from "./styles/Login.module.css";
import { Button, Radio } from "@material-ui/core";
import { OfflinePinSharp } from '@material-ui/icons/'


function validate (values,operation){
    const errors={};
    if (!values.email) {
     errors.email = 'Required';
   } else if (
     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
   ) {
     errors.email = 'Invalid email address';
   }
   if (!values.password){
    errors.password = 'Required';
   } else if (
    !/^[A-Z0-9._%+-]{2,}$/i.test(values.password)
  ) {
    errors.password = 'Invalid password';
  }
  if (!values.name && operation==="Register"){
    errors.name = 'Required';
   } else if (
    !/^[A-Z0-9._%+-]{2,}$/i.test(values.name) && operation==="Register"
  ) {
    errors.name = 'Invalid name';
  }
   return errors;
}

async function authProcess(user,props,operation){
    
        console.log(user)
      if (operation === "Register") {
          const regResponse = await regUser(
      {
        username: user.email,
        password: user.password,
        role:"USER",
        name: user.name
      },
      "POST"
    );
      console.log(regResponse)
    if (regResponse === false) {
      alert("Email already registered");
    }
  }
  const token = await loginUser(
    {
      username: user.email,
      password:user.password,
    },
    "POST"
  );
  if (token[0].token) {
    props.setToken(token[0]);
    props.setUserAC({
      email: user.email,
      role: token[1],
      token: token,
    });
    getProfiles(user.email).then((result) => {
      props.setProfilesAC(result);
    });
  } else {
    alert("Login failed");
  }
  
    }




const AuthForm = (props) => {
  const [operation, setOperation] = useState("Login");
  return (
    <Formik className={styl.formikWrap}
      initialValues={{ email: "", password: "", name: "" }}
      validate={(values)=>validate(values,operation)}
      onSubmit={ async (user) => authProcess(user,{...props},operation) }
    >
      
        
          <Form className={styl.formikForm}>
            <div>
            Email:<br/>
            <FormikMaterialTextField name="email" /><br/>
  
            </div>

            <div>
            Password:<br/>
            <FormikMaterialTextField name="password" /><br/>
         
            </div>

            <div>
            <label>
              <Radio
                type="radio"
                onChange={(e) => setOperation("Register")}
                checked={operation === "Register"}
                name="radio"
                value="sign up"
              />
              Sign up
              
            </label>


            <label>
              <Radio
                type="radio"
                onChange={(e) => setOperation("Login")}
                checked={operation === "Login"}
                name="radio"
                value="sign in"
              />
              Sign in
            </label>
            </div>
            {operation === "Register" ?( 
                <div>
            Name:<br/>
            <FormikMaterialTextField name="name" /><br/>
            </div>)
            :null
            }
            <Button type="submit"> <OfflinePinSharp />  </Button>
          </Form>
        

    </Formik>
  );
};

AuthForm.propTypes = {
    setToken: PropTypes.func.isRequired,
  };
  
  let mapStateToProps = (state, ownProps) => ({
    state: state,
    setToken: ownProps.setToken,
  });
  let AuthFormHOC = connect(mapStateToProps, { setUserAC, setProfilesAC })(AuthForm);
export default AuthFormHOC;