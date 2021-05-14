import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "./Header";

const currUserAdmin ={
    email:"testmail1",
    role:"ADMIN"
}
const currUser ={
    email:"testmail2",
    role:"USER"
}


let container = null;
beforeEach(() => {
  
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {

  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Header currUser = {currUserAdmin} />, container);
  });
  expect(container.textContent).toInclude("Control","testmail1");

  act(() => {
    render(<Header currUser = {currUser} />, container);
  });
  expect(container.textContent).not.toInclude("Control");
});