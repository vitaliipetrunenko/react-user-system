import useToken from "./useToken";
import { renderHook, act } from "@testing-library/react-hooks";
import * as Calls from "./../apiCalls/apiCalls";

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
  act(() => {
    result.current.setToken(defaultToken);
  });
  expect(result.current.token.token).toBe("testtoken");
  act(() => {
    result.current.clearToken();
  });
  expect(result.current.token).toBe(undefined);
  act(() => {
    result.current.renewToken(result.current.token, "mail");
  });
});
