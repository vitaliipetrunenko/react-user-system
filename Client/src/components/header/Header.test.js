import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockClearToken = jest.fn();

it("Renders header", () => {
  const header = render(
    <Router>
      <Header currUser={{ role: "USER", email: "testmail" }} />
    </Router>,
    { initialState: {} }
  );

  expect(header.container).toBeInTheDocument();
});


it("Clears token", () => {
  const header = render(
    <Router>
      <Header
        clearToken={mockClearToken}
        currUser={{ role: "USER", email: "testmail" }}
      />
    </Router>,
    { initialState: {} }
  );
  userEvent.click(header.getByText("Log Out"));
  expect(mockClearToken).toHaveBeenCalled();
});
it("Renders header as admin", () => {
  const header = render(
    <Router>
      <Header currUser={{ role: "ADMIN", email: "testmail" }} />
    </Router>,
    { initialState: {} }
  );

  expect(header.getByText("Users")).toBeInTheDocument();
});
