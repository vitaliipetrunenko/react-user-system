import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  setProfilesAC,
  setLoadingTrueAC,
} from "./../../../redux/actionCreators";
import { getProfiles } from "../../../apiCalls/apiCalls";
import styl from "./UserProfiles.module.css";
import ProfileBoxHOC from "./ProfileBox";
import { Button, CircularProgress } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import ProfileFormHOC from "../../forms/ProfileForm";

function UserProfiles(props) {
  const [operation, setOperation] = useState();

  let username = props.User ? props.User : props.currUser.email;

  useEffect(() => {
    props.setLoadingTrueAC();
    getProfiles(username).then((profiles) => {
      console.log("setting from userProfiles");
      props.setProfilesAC(profiles);
    });
  }, [username]);

  let userboxes = [...props.profileList].map((el) => (
    <ProfileBoxHOC
      key={el._id}
      currUser={username}
      name={el.name}
      surname={el.surname}
      age={el.age}
      author={el.author}
    />
  ));
  return (
    <div className="contentBlock">
      <div className={styl.Userboard}>
        <div name="Greeting">
          Welcome, {props.currUser.email}!<br />
          Browsing, {username} profiles{" "}
        </div>

        {operation === "ADD" ? (
          <div>
            <ProfileFormHOC User={username}></ProfileFormHOC>
            <Button
              onClick={() => {
                setOperation("NONE");
              }}
            >
              <CancelIcon />
            </Button>
          </div>
        ) : (
          <Button id="ADD" value="ADD" onClick={(e) => setOperation("ADD")}>
            {" "}
            Add Profile <CreateIcon />
          </Button>
        )}
      </div>
      {props.isLoadingProfiles ? (
        <div className="LoaderWrap">
          <CircularProgress />
        </div>
      ) : (
        <div className={styl.boxGrid}> {userboxes}</div>
      )}
    </div>
  );
}

let mapStateToProps = (state, ownProps) => {
  return {
    currUser: state.authData.currUser,
    profileList: state.profileData.currProfiles,
    isLoadingProfiles: state.profileData.isLoading,
  };
};

let HocUserProfiles = connect(mapStateToProps, {
  setProfilesAC,
  setLoadingTrueAC,
})(UserProfiles);
export default HocUserProfiles;
