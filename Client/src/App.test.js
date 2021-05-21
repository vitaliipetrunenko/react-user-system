import React from "react";
import { render, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import * as Calls from "./apiCalls/apiCalls";
import App from "./App";
import { Provider } from "react-redux";
import profileData from "./redux/profilesReducer";
import authData from "./redux/authReducer";
import useToken from "./hooks/useToken";
import { renderHook } from "@testing-library/react-hooks";

class LocalStorageMock {
  constructor() {
    this.store = { token: defaultToken };
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

let defaultToken = {
  token: "testtoken",
  expiry: "1000000000000000000000000000000",
};

global.localStorage = new LocalStorageMock();

const rootReducer = combineReducers({ profileData, authData });
const renderWithRedux = (
  component,
  { defaultUsers, store = createStore(rootReducer, {}) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

it("Renders app with valid token", async () => {
  const { result } = renderHook(() => useToken());
  Calls.loadUserFromToken = jest.fn().mockImplementation(() =>
    Promise.resolve({
      email: "loadedfromtoken",
      token: "token",
    })
  );
  await waitFor(() => {
    result.current.setToken(defaultToken);
  });

  const app = renderWithRedux(
    <Router>
      <App />
    </Router>,
    { initialState: {} }
  );

  expect(app.container).toBeInTheDocument();
});

it("Renders login with invalid token", async () => {
  Calls.loadUserFromToken = jest.fn().mockImplementation(() =>
    Promise.resolve({
      email: "loadedfromtoken",
    })
  );

  const app = renderWithRedux(
    <Router>
      <App />
    </Router>,
    { initialState: {} }
  );
  await waitFor(() => {
    expect(app.container).toBeInTheDocument();
  });
});

it("Renders app with valid but outdated token", async () => {
  const { result } = renderHook(() => useToken());
  await waitFor(() => {
    result.current.setToken({ ...defaultToken, expiry: 1 });
  });
  const app = renderWithRedux(
    <Router>
      <App />
    </Router>,
    { initialState: {} }
  );

  expect(app.container).toBeInTheDocument();
});
