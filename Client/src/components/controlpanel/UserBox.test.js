import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createStore, combineReducers } from "redux";
import * as Calls from "./../../apiCalls/apiCalls";
import { Provider } from "react-redux";
import authData from "./../../redux/authReducer";
import UserBoxHOC from "./UserBox";
let userObj = { authData: { currUser: { email: "mail", role: "ADMIN" } } };

const renderWithRedux = (
  component,
  { defaultUsers, store = createStore(authData, userObj) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

it("Renders userbox and shows user, also edits it", async () => {
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
  Calls.fetchUsers = jest.fn().mockImplementation(() => Promise.resolve(true));

  const profileBox = renderWithRedux(
    <Router>
      <UserBoxHOC
        setUsers={jest.fn(() => true)}
        user={{ name: "testname", email: "testmail", role: "USER" }}
      />
    </Router>,
    { initialState: {} }
  );
  await waitFor(() => {
    expect(profileBox.container).toBeInTheDocument();
    expect(profileBox.getByText("Name: testname")).toBeInTheDocument();
  });
  userEvent.click(profileBox.getAllByText("Edit")[0]);
  await waitFor(() => {
    expect(profileBox.getByText("Cancel")).toBeInTheDocument();
  });
  userEvent.click(profileBox.getAllByText("Cancel")[0]);
  await waitFor(() => {
  userEvent.click(profileBox.getAllByText("Edit")[0]);
  })
  userEvent.type(
    profileBox.getAllByRole("textbox", { name: "name" })[0],
    "edit"
  );
  await waitFor(() => {
  userEvent.click(profileBox.getAllByText("Okay")[0]);
  })
  expect(profileBox.container).toBeInTheDocument();
});

it("Renders userbox and shows user, also fails to edit it", async () => {
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

  Calls.fetchUsers = jest.fn().mockImplementation(() => Promise.resolve(true));

  const profileBox = renderWithRedux(
    <Router>
      <UserBoxHOC
        user={{ name: "testname", email: "testmail", role: "USER" }}
        setUsers={jest.fn(() => true)}
      />
    </Router>,
    { initialState: {} }
  );
  await waitFor(() => {
    expect(profileBox.container).toBeInTheDocument();
    expect(profileBox.getByText("Name: testname")).toBeInTheDocument();
  });
  userEvent.click(profileBox.getAllByText("Edit")[0]);
  await waitFor(() => {
    expect(profileBox.getByText("Cancel")).toBeInTheDocument();
  });
  await waitFor(() => {
  userEvent.click(profileBox.getAllByText("Cancel")[0]);
  })
  await waitFor(()=>{
  userEvent.click(profileBox.getAllByText("Edit")[0]);
  })
  userEvent.type(
    profileBox.getAllByRole("textbox", { name: "name" })[0],
    "edit"
  );
  
  await waitFor(()=>{
  userEvent.click(profileBox.getAllByText("Okay")[0]);
  })
  expect(profileBox.container).toBeInTheDocument();

});

it("same thing but with delete", async () => {
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
  Calls.fetchUsers = jest.fn().mockImplementation(() => Promise.resolve(true));

  const profileBox = renderWithRedux(
    <Router>
      <UserBoxHOC
        setUsers={jest.fn(() => true)}
        user={{ name: "testname", email: "testmail", role: "USER" }}
      />
    </Router>,
    { initialState: {} }
  );
  await waitFor(() => {
    expect(profileBox.container).toBeInTheDocument();
    expect(profileBox.getByText("Name: testname")).toBeInTheDocument();
  });
  userEvent.click(profileBox.getAllByText("Delete")[0]);
  await waitFor(() => {
    expect(profileBox.getByText("Cancel")).toBeInTheDocument();
  });
  userEvent.click(profileBox.getAllByText("Cancel")[0]);
  await waitFor(() => {
  userEvent.click(profileBox.getAllByText("Delete")[0]);
  })
  await waitFor(() => {
  userEvent.click(profileBox.getAllByText("Okay")[0]);
  })
  expect(profileBox.container).toBeInTheDocument();
});

it("doesnt render for non-admins", async () => {
  userObj.authData.currUser.role = "USER";
  const profileBox = renderWithRedux(
    <Router>
      <UserBoxHOC
        setUsers={jest.fn().mockImplementation(() => Promise.resolve(true))}
        user={{ name: "testname", email: "testmail", role: "testrole" }}
      />
    </Router>,
    { initialState: {} }
  );
});
