import React from "react";
import { Formik, Form } from "formik";
import { getProfiles, profileChange } from "../../apiCalls/apiCalls";
import { connect } from "react-redux";
import FormikMaterialTextField from "./common/FormikMaterialTextField";
import { Button } from "@material-ui/core";
import { OfflinePinSharp } from "@material-ui/icons/";
import { setProfilesAC } from "./../../redux/actionCreators";

function validate(values, operation) {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (!/^[A-Z0-9._%+-]{2,}$/i.test(values.name)) {
    errors.name = "Invalid name";
  }
  if (!values.surname) {
    errors.surname = "Required";
  } else if (!/^[A-Z0-9._%+-0-9]{2,}$/i.test(values.surname)) {
    errors.surname = "Invalid surname";
  }
  if (!values.age) {
    errors.age = "Required";
  } else if (!/^[0-9]{1,}$/i.test(values.age)) {
    errors.age = "Invalid age";
  }
  return errors;
}

async function profileProcess(profile, User, setProfilesACprop) {
  const addProfileResult = await profileChange(
    {
      name: profile.name,
      surname: profile.surname,
      age: profile.age,
      author: User,
    },
    "PUT"
  );
  if (addProfileResult === false) {
    alert("duplicate profile");
  }
  getProfiles(User).then((result) => {
    setProfilesACprop(result);
  });
}

const ProfileForm = (props) => {
  return (
    <Formik
      initialValues={{ name: "", surname: "", age: "" }}
      validate={(values) => validate(values)}
      onSubmit={async (profile) =>
        profileProcess(profile, props.User, props.setProfilesAC)
      }
    >
      <Form>
        <div>
          Name:
          <br />
          <FormikMaterialTextField name="name" id="nameA" label="nameF" />
          <br />
        </div>

        <div>
          Surname:
          <br />
          <FormikMaterialTextField
            name="surname"
            id="surnameA"
            label="surnameF"
          />
          <br />
        </div>

        <div>
          Age:
          <br />
          <FormikMaterialTextField
            type="number"
            id="ageA"
            name="age"
            label="ageF"
          />
          <br />
        </div>

        <Button type="submit" data-testid="submitter">
          {" "}
          <OfflinePinSharp />{" "}
        </Button>
      </Form>
    </Formik>
  );
};

let mapStateToProps = (state, ownProps) => ({
  state: state,
});
let ProfileFormHOC = connect(mapStateToProps, { setProfilesAC })(ProfileForm);
export default ProfileFormHOC;
