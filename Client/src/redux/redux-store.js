import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profilesReducer";






let reducers = combineReducers({
    authData: authReducer,
    profileData: profileReducer
})

let store = createStore(reducers);




export default store