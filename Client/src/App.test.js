import React from 'react'
import {act, getByText, queryAllByDisplayValue, render, waitFor} from '@testing-library/react'
import {BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import {createStore } from "redux";

import Dashboard from './components/dashboard/Dashboard';
import useToken from './hooks/useToken';
import Userboard,{AdminUserboard} from './components/userboard/Userboard';
import { setTokenAC, setUserAC, setProfilesAC } from './redux/actionCreators';
import Header from './components/header/Header';
import ControlPanelHOC from './components/controlpanel/ControlPanel';
import AuthFormHOC from './components/forms/LoginForm';

import * as Calls from './apiCalls/apiCalls'
import App from './App'
import { Provider } from 'react-redux';
import authReducer,{defaultUsers} from './redux/authReducer';


const renderWithRedux = (component,{
  defaultUsers,store = createStore(authReducer,defaultUsers)
} = {}) => {

  return {
    ...render(<Provider store={store}>{component}</Provider>)

  }
}
  




it('Renders app',async () => {
    
  Calls.loadUserFromToken = jest.fn().mockImplementation(() => Promise.resolve(
    {
      email:"loadedfromtoken"
    }
  ))
 
   

   
   const app  = renderWithRedux(
   
   <Router>
    <App />
    </Router>
  , { initialState: {} })

  
    expect(app.container).toBeInTheDocument()
    
    // 
    
  })

 