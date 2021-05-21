import useToken from "./useToken";
import { renderHook, act } from "@testing-library/react-hooks";
import * as Calls from "./../apiCalls/apiCalls";
import { waitFor } from "@testing-library/react";

let defaultToken = {
  token: "testtoken",
  expiry: "1",
};

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

global.localStorage = new LocalStorageMock();

it("just works", async () => {
  Calls.loginUser = jest
    .fn()
    .mockImplementation(() => Promise.resolve(defaultToken));
  const { result } = renderHook(() => useToken());
  await waitFor(() => {
    result.current.setToken(defaultToken);
  });
  expect(result.current.token.token).toBe("testtoken");
  await waitFor(() => {
    result.current.clearToken();
  });
  expect(result.current.token).toBe(undefined);
  await waitFor(() => {
    result.current.renewToken(result.current.token, "mail");
  });
});
