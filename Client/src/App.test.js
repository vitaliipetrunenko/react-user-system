import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import * as Calls from "./apiCalls/apiCalls";
import App from "./App";
import { Provider } from "react-redux";
import authReducer from "./redux/authReducer";

const renderWithRedux = (
  component,
  { defaultUsers, store = createStore(authReducer, defaultUsers) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

it("Renders app", async () => {
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
  expect(app.container).toBeInTheDocument();
});

