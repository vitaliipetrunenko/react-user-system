import React, { useState, useEffect } from "react";
import styl from "./Login.module.css";
import PropTypes from "prop-types";
import { setUserAC, setProfilesAC } from "../../redux/actionCreators";
import { connect } from "react-redux";
import { getProfiles } from "../../App";

export async function loginUser(credentials, method) {
  return fetch("http://localhost:8080/login", {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export async function regUser(credentials, method) {
  return fetch("http://localhost:8080/register", {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function LoginMain(props) {
  const [username, setUserName] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [operation, setOperation] = useState();
  useEffect(() => {
    setOperation("Login");
    setRole("USER")
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (operation === "Register") {
      const regResponse = await regUser(
        {
          username,
          password,
          role,
          name,
        },
        "POST"
      );

      if (regResponse === false) {
        alert("Email already registered");
      }
    }
    const token = await loginUser(
      {
        username,
        password,
      },
      "POST"
    );
    if (token[0].token) {
      props.setToken(token[0]);
      props.setUserAC({
        email: username,
        role: token[1],
        token: token,
      });
      getProfiles(username).then((result) => {
        props.setProfilesAC(result);
      });
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className={styl.loginWrapper}>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" name="Username" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password" name="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {operation === "Register" ? (
          <div>
            <label>
              <p>Name</p>
              <input type="text"  onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              <p>Role</p>
              <select id="roles" onChange={(e) => setRole(e.target.value)} name="roles">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </label>
          </div>
        ) : null}
        <div>
          <input
            type="radio"
            checked={operation === "Login"}
            id="operationChoice1"
            name="operation"
            onChange={(e) => setOperation(e.target.value)}
            value="Login"
          />
          <label htmlFor="operationChoice1">Login</label>
          <input
            type="radio"
            checked={operation === "Register"}
            id="operationChoice2"
            name="operation"
            onChange={(e) => setOperation(e.target.value)}
            value="Register"
          />
          <label htmlFor="operationChoice2">Register</label>
        </div>
        <div>
          <button className={styl.submitButton} type="submit">Let's go</button>
        </div>
      </form>
    </div>
  );
}

LoginMain.propTypes = {
  setToken: PropTypes.func.isRequired,
};

let mapStateToProps = (state, ownProps) => ({
  state: state,
  setToken: ownProps.setToken,
});
let Login = connect(mapStateToProps, { setUserAC, setProfilesAC })(LoginMain);
export default Login;
