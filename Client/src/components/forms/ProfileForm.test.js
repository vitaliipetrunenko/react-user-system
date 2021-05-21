import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import * as Calls from "../../apiCalls/apiCalls";

import { createStore } from "redux";
import { Provider } from "react-redux";
import profileReducer from "../../redux/profilesReducer";
import ProfileFormHOC from "./ProfileForm";

const renderWithRedux = (
  component,
  { defaultProfiles, store = createStore(profileReducer, defaultProfiles) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

it("Renders profile adder", async () => {
  Calls.profileChange = jest.fn(() => true);
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
  const adder = renderWithRedux(
    <Router>
      <ProfileFormHOC User={"mail"} />
    </Router>,
    { initialState: {} }
  );

  expect(adder.container).toBeInTheDocument();

  const nameField = adder.getByRole("textbox", { name: "nameF" });
  const surnameField = adder.getByRole("textbox", { name: "surnameF" });
  const ageField = adder.getByRole("spinbutton", { name: "ageF" });
  const submitter = adder.getByTestId("submitter");
 
  userEvent.type(ageField, "1.8");
  userEvent.clear(ageField);
  userEvent.type(ageField, "18");
  userEvent.type(nameField, "name");
  userEvent.type(surnameField, "surname");
  
 
  
  
  await waitFor(() => {
  userEvent.click(submitter);
  })
  expect(adder.container).toBeInTheDocument();
});
