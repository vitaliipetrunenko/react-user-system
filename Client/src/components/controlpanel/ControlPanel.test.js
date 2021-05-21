import React from 'react'
import {render, waitFor} from '@testing-library/react'
import {BrowserRouter as Router } from 'react-router-dom'
import {createStore } from "redux";


import * as Calls from './../../apiCalls/apiCalls'

import { Provider } from 'react-redux';
import authReducer from './../../redux/authReducer';
import ControlPanelHOC from './ControlPanel';



const renderWithRedux = (component,{
  defaultUsers,store = createStore(authReducer,{authData:{currUser:{
    
    
    email:"test",
    role:"ADMIN"
}}})
   } = {}) => {

  return {
    ...render(<Provider store={store}>{component}</Provider>)

  }
}
  




it('Renders controlpanel and shows users',async () => {
    
  Calls.fetchUsers = jest.fn().mockImplementation(() => Promise.resolve(
    [{
      email:"user1",
      _id:1
    },{
        email:"user2",
        _id:2

      }]
  ))
 
   

   
   const ControlPanel  = renderWithRedux(
   
   <Router>
    <ControlPanelHOC />
    </Router>
  , { initialState: {} })
    await waitFor(() => {
        expect(ControlPanel.container).toBeInTheDocument()
        expect(ControlPanel.getByText("Mail: user2")).toBeInTheDocument() 
      });
    
    // 
    
  })

 