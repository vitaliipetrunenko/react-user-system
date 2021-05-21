import React, { useState } from "react";
import { connect } from "react-redux";
import styl from "./../userboard/userprofiles/UserProfiles.module.css";
import { NavLink } from "react-router-dom";
import { Button, Select, TextField } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { fetchUsers } from "../../apiCalls/apiCalls";

function UserBox(props) {
  const [operation, setOperation] = useState("NONE");
  const [name, setName] = useState(props.user.name);
  const [mail, setMail] = useState(props.user.email);
  const [role, setRole] = useState(props.user.role);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (operation === "EDIT") {
      
      const changeUserResult = await fetchUsers("PATCH", [
        { name, email: mail, role },
        {
          name: props.user.name,
          email: props.user.email,
          role: props.user.role,
        },
      ]);

      if (changeUserResult === false) {
        alert("duplicate user");
      }
      
      fetchUsers("POST").then((result) => {
        props.setUsers(result);
      });
      setOperation("NONE");
    } else if (operation === "DELETE") {
      const changeUserResult = await fetchUsers("DELETE", {
        name: props.user.name,
        email: props.user.email,
        role: props.user.role,
      });

      if (changeUserResult === false) {
        alert("profile not deleted");
      }
      fetchUsers().then((result) => {
        setOperation("NONE");
        props.setUsers(result);
      });
    }
  };

  if (props.currUser.role === "ADMIN") {
    const questionButtons = [
      <Button key={1}  type="submit" name="okay">
        Okay
        <CheckIcon />
      </Button>,
      <Button key={2} value="NONE" onClick={(e) => setOperation("NONE")}>
        {" "}
        Cancel
        <CancelIcon />
      </Button>,
      null,
      null,
    ];
    const defaultButtons = [
      null,
      null,
      <Button key={1} value="EDIT" name="edit" onClick={(e) => setOperation("EDIT")}>
        Edit
        <CreateIcon />
      </Button>,
      <Button
        key={2}
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
        name="name"
        id="name"
        label="name"
        onChange={(e) => setName(e.target.value)}
      />,
      <TextField value={mail} onChange={(e) => setMail(e.target.value)} />,
      <Select
        id="roles"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        name="roles"
      >
        <option value="USER">user</option>
        <option value="ADMIN">admin</option>
      </Select>,
    ];
    const defaultNames = [
      props.user ? props.user.name : "Loading",
      props.user ? props.user.email : "Loading",
      props.user ? props.user.role : "Loading",
    ];

    if (operation === "EDIT") boxValues = inputAreas;
    else boxValues = defaultNames;

    return (
      <div className={styl.box}>
        {operation === "NONE" ? (
          <p>
            <NavLink
              name="user"
              to={{
                pathname: "/userprofiles",
                state: { wantedProfile: props.user.email },
              }}
            >
              <img
                alt={""}
                src="http://mymbs.co.id/public/upload/image/user/user.png"
              ></img>
            </NavLink>
          </p>
        ) : null}
        <form onSubmit={handleSubmit}>
          <span label="name" name="name">
            Name: {boxValues[0]}
          </span>
          <span>Mail: {boxValues[1]}</span>
          <span className={styl.roleSelect}>Role: {boxValues[2]}</span>
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
  } else return <span>You have no access to this data.</span>;
}

let mapStateToProps = (state, ownProps) => ({
  currUser: state.authData.currUser,
});

let UserBoxHOC = connect(mapStateToProps, {})(UserBox);
export default UserBoxHOC;
