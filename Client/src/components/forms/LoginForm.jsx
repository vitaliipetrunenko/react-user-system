import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginUser, regUser, getProfiles } from "../../apiCalls/apiCalls";
import PropTypes from "prop-types";
import { setUserAC, setProfilesAC } from "../../redux/actionCreators";
import { connect } from "react-redux";
import FormikMaterialTextField from "./common/FormikMaterialTextField";
import styl from "./styles/Login.module.css";
import { Button, Radio } from "@material-ui/core";
import { OfflinePinSharp } from "@material-ui/icons/";
import { emailValidate, passwordValidate, nameValidate } from "./common/Validators";
import { badEmail, reqField,badPass,badName,usedEmail,failedLogin } from "./common/ErrorsText";
import { usrRole } from "../../redux/roles";

const login = "Login";
const register = "Register";



function validate(values, operation) {
  const errors = {};
  if (!values.email) {
    errors.email = reqField;
  } else if (!emailValidate.test(values.email)) {
    errors.email = badEmail;
  }
  if (!values.password) {
    errors.password = reqField;
  } else if (!passwordValidate.test(values.password)) {
    errors.password = badPass;
  }
  if (!values.name && operation === register) {
    errors.name = reqField;
  } else if (
    !nameValidate.test(values.name) &&
    operation === register
  ) {
    errors.name = badName;
  }
  return errors;
}

async function authProcess(user, props, operation) {
  if (operation === register) {
    const regResponse = await regUser(
      {
        username: user.email,
        password: user.password,
        role: usrRole,
        name: user.name,
      },
      "POST"
    );

    if (regResponse === false) {
      alert(usedEmail);
    }
  }
  const token = await loginUser(
    {
      username: user.email,
      password: user.password,
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
    alert(failedLogin);
  }
}

const AuthForm = (props) => {
  const [operation, setOperation] = useState(login);
  return (
    <Formik
      className={styl.formikWrap}
      initialValues={{ email: "", password: "", name: "" }}
      validate={(values) => validate(values, operation)}
      onSubmit={(user) => authProcess(user, { ...props }, operation)}
    >
      <Form className={styl.formikForm}>
        <div>
          Email:
          <br />
          <FormikMaterialTextField label="emailF" name="email" id="email" />
          <br />
        </div>

        <div>
          Password:
          <br />
          <FormikMaterialTextField id="pass" label="passF" name="password" />
          <br />
        </div>
        <div>
          <label>
            <Radio
              type="radio"
              data-testid="opChanger"
              onChange={(e) => setOperation(register)}
              checked={operation === register}
              name="radio"
              value="sign up"
            />
            Sign up
          </label>

          <label>
            <Radio
              type="radio"
              onChange={(e) => setOperation(login)}
              checked={operation === login}
              name="radio"
              value="sign in"
            />
            Sign in
          </label>
        </div>
        {operation === register ? (
          <div>
            Name:
            <br />
            <FormikMaterialTextField name="name" id="name" label="nameF" />
            <br />
          </div>
        ) : null}
        <Button data-testid="submitter" type="submit">
          {" "}
          <OfflinePinSharp />{" "}
        </Button>
      </Form>
    </Formik>
  );
};

AuthForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
let mapStateToProps = (state, ownProps) => ({
  setToken: ownProps.setToken,
});
let AuthFormHOC = connect(mapStateToProps, { setUserAC, setProfilesAC })(
  AuthForm
);
export default AuthFormHOC;
