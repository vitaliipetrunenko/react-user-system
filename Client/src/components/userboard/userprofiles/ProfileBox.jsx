import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { getProfiles, profileChange } from "../../../apiCalls/apiCalls";
import { setProfilesAC } from "../../../redux/actionCreators";
import styl from "./UserProfiles.module.css";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

function ProfileBox(props) {
  const [operation, setOperation] = useState("NONE");
  const [name, setName] = useState(props.name);
  const [surname, setSurname] = useState(props.surname);
  const [age, setAge] = useState(props.age);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (operation === "EDIT") {
      const changeProfileResult = await profileChange(
        [
          { name, surname, age, author: props.author },
          {
            name: props.name,
            surname: props.surname,
            age: props.age,
            author: props.author,
          },
        ],
        "PATCH"
      );
      if (changeProfileResult === false) {
        alert("duplicate profile");
      }
      getProfiles(props.currUser).then((result) => {
        props.setProfilesAC(result);
        setOperation("NONE");
      });
    } else if (operation === "DELETE") {
      const changeProfileResult = await profileChange(
        {
          name: props.name,
          surname: props.surname,
          age: props.age,
          author: props.author,
        },
        "DELETE"
      );
      if (changeProfileResult === false) {
        alert("profile not deleted");
      }
      getProfiles(props.currUser).then((result) => {
        props.setProfilesAC(result);
        setOperation("NONE");
      });
    }
  };
  const questionButtons = [
    <Button key={1} type="submit" name="okay">
      Okay
      <CheckIcon />
    </Button>,
    <Button value="NONE" key={2}  onClick={(e) => setOperation("NONE")}>
      Cancel
      <CancelIcon />{" "}
    </Button>,
    null,
    null,
  ];
  const defaultButtons = [
    null,
    null,
    <Button key={1} 
      value="EDIT"
      id="edit"
      name="edit"
      onClick={(e) => setOperation("EDIT")}
    >
      Edit
      <CreateIcon />
    </Button>,
    <Button key={2} 
      value="DELETE"
      name="delete"
      onClick={(e) => setOperation("DELETE")}
    >
      Delete
      <DeleteIcon />
    </Button>,
  ];

  let chosenButtons = [];

  if (operation === "NONE") chosenButtons = defaultButtons;
  else chosenButtons = questionButtons;

  let boxValues = [];

  const inputAreas = [
    <TextField
      value={name}
      id="name"
      name="name"
      label="name"
      onChange={(e) => setName(e.target.value)}
    />,
    <TextField value={surname} onChange={(e) => setSurname(e.target.value)} />,
    <TextField
      type="number"
      value={age}
      onChange={(e) => setAge(parseInt(e.target.value))}
    />,
  ];
  const defaultNames = [
    props.name ? props.name : "Loading",
    props.surname ? props.surname : "Loading",
    props.age ? props.age : "Loading",
  ];

  if (operation === "EDIT") boxValues = inputAreas;
  else boxValues = defaultNames;

  return (
    <div className={styl.box}>
      {operation === "NONE" ? (
        <p>
          <a>
            <img
              alt={""}
              src="http://mymbs.co.id/public/upload/image/user/user.png"
            ></img>
          </a>
        </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <span name="name" label="name">
          Name: {boxValues[0]}
        </span>
        <span>Surname: {boxValues[1]}</span>
        <span>Age: {boxValues[2]}</span>
        {operation === "DELETE" ? (
          <span>
            Are You sure?
            <br />
          </span>
        ) : null}
        <div>{chosenButtons}</div>
      </form>
    </div>
  );
}

let mapStateToProps = (state, ownProps) => ({});

let ProfileBoxHOC = connect(mapStateToProps, { setProfilesAC })(ProfileBox);
export default ProfileBoxHOC;
