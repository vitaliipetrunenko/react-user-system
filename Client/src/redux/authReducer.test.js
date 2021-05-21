import authReducer from "./authReducer";

export let defaultUsers = {
  currUser: {
    email: "testmail",
  },
};

it("sets user", async () => {
  const testObj = { type: "SET-USER", user: { email: "test1mail" } };
  const value = await authReducer(defaultUsers, testObj);
  expect(value.currUser.email).toBe(testObj.user.email);
});
it("sets token", async () => {
  const testObj = { type: "SET-TOKEN", token: { token: "test" } };
  const value = await authReducer(defaultUsers, testObj);
  expect(value.currUser.token.token).toBe(testObj.token.token);
});
