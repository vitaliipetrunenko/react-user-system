import React from 'react'
import {getByText, queryAllByDisplayValue, render, waitFor} from '@testing-library/react'
import {BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import AuthFormHOC from './LoginForm'
import authReducer from '../../redux/authReducer'
import * as Calls  from "../../apiCalls/apiCalls";


import {createStore} from "redux"
import { Provider } from 'react-redux'

const mockSetToken = jest.fn();
    

const renderWithRedux = (component,{
    
    defaultUsers,store = createStore(authReducer,defaultUsers)
     } = {}) => {
  
    return {
      ...render(<Provider store={store}>{component}</Provider>)
  
    }
  }



it('Renders login and logs in', async () => {
    Calls.loginUser = jest.fn(()=>({email:"mail",token:{token:1,expiry:1}}))
    Calls.regUser = jest.fn(()=>({email:"mail",token:{token:1,expiry:1}}))
    Calls.getProfiles = jest.fn(()=>([{},{}]))
    const login = renderWithRedux(<Router>
    <AuthFormHOC setToken={mockSetToken}/>
    </Router>, { initialState: {} })
  
    expect(login.container).toBeInTheDocument()
    const emailField = login.getByTestId("emailF")
    const passField = login.getByTestId("passF")
    const submitter = login.getByTestId("submitter")
    userEvent.type(emailField,"test@test.com")
    userEvent.type(passField,"test")
    userEvent.click(submitter)
  })

  

it('Renders login and registers', async () => {
  Calls.loginUser = jest.fn(()=>({email:"mail",token:{token:1,expiry:1}}))
  Calls.regUser = jest.fn(()=>({email:"mail",token:{token:1,expiry:1}}))
  Calls.getProfiles = jest.fn(()=>([{},{}]))
  const login = renderWithRedux(<Router>
  <AuthFormHOC setToken={mockSetToken}/>
  </Router>, { initialState: {} })

  expect(login.container).toBeInTheDocument()
  const emailField = login.getByTestId("emailF")
  const passField = login.getByTestId("passF")
  
  const opChanger = login.getByTestId("opChanger")
  const submitter = login.getByTestId("submitter")
  userEvent.click(opChanger)


  

    const nameField = login.getByTestId("nameF")
    userEvent.type(emailField,"test2@test.com")
    userEvent.type(passField,"test")
    userEvent.type(nameField,"test")
    userEvent.click(submitter)

 
})


it('Renders login and validates data', async () => {
  Calls.loginUser = jest.fn(()=>({email:"mail",token:{token:1,expiry:1}}))
  Calls.regUser = jest.fn(()=>({email:"mail",token:{token:1,expiry:1}}))
  Calls.getProfiles = jest.fn(()=>([{},{}]))
  const login = renderWithRedux(<Router>
  <AuthFormHOC setToken={mockSetToken}/>
  </Router>, { initialState: {} })

  expect(login.container).toBeInTheDocument()
  const emailField = login.getByTestId("emailF")
  const passField = login.getByTestId("passF")
  
  const opChanger = login.getByTestId("opChanger")
  const submitter = login.getByTestId("submitter")
  userEvent.click(opChanger)


  
   await waitFor(() => {
    const nameField = login.getByTestId("nameF")
    userEvent.type(emailField,"test2test")
    userEvent.type(passField,"t")
    userEvent.type(nameField,"")
    userEvent.click(submitter)

  });
  await waitFor(() => {
    expect(login.getAllByText("Required")[1]).toBeInTheDocument()
  })
})

