import React from "react";
import { render, waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import Userboard, { AdminUserboard } from "./Userboard";
import { Provider } from "react-redux";
import store from "./../../redux/redux-store";
import { createMemoryHistory } from "history";

describe("UserBoard", () => {
  it("Renders userboard", async () => {
    const history = createMemoryHistory();
    const state = { wantedProfile: "mail" };
    history.push("/", state);

    const UserBoard = render(
      <Provider store={store}>
        <Router history={history}>
          <Userboard state={{ authData: { currUser: { email: "mail" } } }} />
        </Router>
      </Provider>,
      { initialState: {} }
    );
    await waitFor(() => {
      expect(UserBoard.container).toBeInTheDocument();
    });
  });

  it("Renders admin userboard", async () => {
    const history = createMemoryHistory();
    const state = { wantedProfile: "mail" };
    history.push("/", state);

    const UserBoard = render(
      <Provider store={store}>
        <Router history={history}>
          <AdminUserboard />
        </Router>
      </Provider>,
      { initialState: {} }
    );
    await waitFor(() => {
      expect(UserBoard.container).toBeInTheDocument();
    });
  });
});
