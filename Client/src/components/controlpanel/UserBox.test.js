import React from 'react'
import { render, waitFor} from '@testing-library/react'
import {BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import {createStore,combineReducers } from "redux";


import * as Calls from './../../apiCalls/apiCalls'

import { Provider } from 'react-redux';
import authData from './../../redux/authReducer';
//import ProfileBoxHOC from './ProfileBox';
import UserBoxHOC from './UserBox';



//const rootReducer = combineReducers({profileData,authData})
const renderWithRedux = (component,{
  defaultUsers,store = createStore(authData,{authData:{currUser:{email:"mail",role:"ADMIN"}}})
   } = {}) => {

    
  return {
    ...render(<Provider store={store}>{component}</Provider>)

  }
}
  




it('Renders userbox and shows user',async () => {
    
  Calls.getProfiles = jest.fn().mockImplementation(() => Promise.resolve(
    [{
      name:"user1",
      _id:1,
      author:"mail"
    },{
        name:"user2",
        _id:2,
        author:"mail"
      }]
  ))
 
   

   
   const profileBox  = renderWithRedux(
   
   <Router>
    <UserBoxHOC user={{name:"testname", email:"testmail", role:"testrole"}}/>
    </Router>
  , { initialState: {} })
    await waitFor(() => {
        expect(profileBox.container).toBeInTheDocument()
        expect(profileBox.getByText("Name: testname")).toBeInTheDocument() 
      });
      userEvent.click(profileBox.getAllByText("Edit")[0])
      await waitFor(() => {
      expect(profileBox.getByText("Cancel")).toBeInTheDocument() 
      
    });
    userEvent.click(profileBox.getAllByText("Cancel")[0])
    userEvent.click(profileBox.getAllByText("Edit")[0])
    userEvent.type(profileBox.getAllByRole('textbox',{name:"name"})[0],"edit")
     userEvent.click(profileBox.getAllByText("Okay")[0])
    expect(profileBox.getByDisplayValue("testnameedit")).toBeInTheDocument()
    // 
    
  })

 