const SET_USER = "SET-USER";
const SET_TOKEN = "SET-TOKEN";

export let defaultUsers = {
  currUser: {
    email: "testmail",
  },
};

export const authReducer = (state = defaultUsers, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currUser: action.user,
      };

    case SET_TOKEN:
      return {
        ...state,
        currUser: { ...state.currUser, token: { ...action.token } },
      };
    default:
      return state;
  }
};
export default authReducer;
