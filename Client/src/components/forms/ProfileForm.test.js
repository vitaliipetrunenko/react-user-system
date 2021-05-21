import React from "react";
import { render } from "@testing-library/react";
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
  Calls.getProfiles = jest.fn(() => [{}, {}]);
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
  userEvent.type(nameField, "name");
  userEvent.type(surnameField, "surname");
  userEvent.type(ageField, "18");
  userEvent.click(submitter);
});
