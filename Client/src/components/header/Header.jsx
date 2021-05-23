import { Button } from "@material-ui/core";
import { HomeSharp } from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { NavLink } from "react-router-dom";
import styl from "./Header.module.css";
import { admRole } from "../../redux/roles";

export default function Header(props) {
  return (
    <div className={styl.Header}>
      <div className={styl.User}>
        <img
          className={
            props.currUser.role === admRole ? styl.adminPhoto : styl.userPhoto
          }
          alt={""}
          src={"http://mymbs.co.id/public/upload/image/user/user.png"}
        ></img>
        <p>{props.currUser.email}</p>
      </div>
      <div className={styl.Buttons}>
        <NavLink
          to={{
            pathname: "/",
            state: { wantedProfile: props.currUser.email },
          }}
        >
          <Button>
            Home <HomeSharp />{" "}
          </Button>
        </NavLink>

        {props.currUser.role === admRole ? (
          <NavLink to="/control">
            <Button>
              Users
              <GroupIcon />
            </Button>
          </NavLink>
        ) : null}
        <Button
          name="LogOut"
          onClick={() => {
            props.clearToken();
          }}
        >
          Log Out
          <ExitToAppIcon />
        </Button>
      </div>
    </div>
  );
}
