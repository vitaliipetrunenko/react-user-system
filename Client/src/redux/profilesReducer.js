const SET_PROFILES = "SET-PROFILES";

let defaultProfiles = {
  currProfiles: [],
};

export const profileReducer = (state = defaultProfiles, action) => {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        currProfiles: [...action.profiles],
      };
    default:
      return state;
  }
};
export default profileReducer;
