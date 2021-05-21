import React from "react";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import * as Calls from "./../../../apiCalls/apiCalls";
import { Provider } from "react-redux";
import profileData from "./../../../redux/profilesReducer";
import authData from "./../../../redux/authReducer";
import HocUserProfiles from "./UserProfiles";

const rootReducer = combineReducers({ profileData, authData });
const renderWithRedux = (
  component,
  {
    defaultUsers,
    store = createStore(rootReducer, ({})),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

it("Renders userprofiles and shows profiles", async () => {
  Calls.getProfiles = jest.fn().mockImplementation(() =>
    Promise.resolve([
      {
        name: "user1",
        _id: 1,
        author: "mail",
      },
      {
        name: "user2",
        _id: 2,
        author: "mail",
      },
    ])
  );

  const userProfiles = renderWithRedux(
    <Router>
      <HocUserProfiles User={"mail"} />
    </Router>,
    { initialState: {} }
  );
  await waitFor(() => {
    expect(userProfiles.container).toBeInTheDocument();
    expect(userProfiles.getByText("Name: user2")).toBeInTheDocument();
  });
});
