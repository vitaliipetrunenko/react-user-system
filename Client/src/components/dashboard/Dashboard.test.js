import React from 'react'
import {act, getByText, queryAllByDisplayValue, render, waitFor} from '@testing-library/react'
import {BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Dashboard from './Dashboard'
import { getStats } from '../../apiCalls/apiCalls'
import * as Calls from '../../apiCalls/apiCalls'



//Calls.getStats = jest.fn(()=>([5,5,5]))


// const mockSetState = jest.fn()

// jest.mock('react', () => ({
//     useState: initial => [initial, mockSetState]
//   }));



// //const mockApiStats = jest.fn();
// jest.mock('../../apiCalls/apiCalls')    
// const apiCalls = require('../../apiCalls/apiCalls')
// apiCalls.getStats.mockImplementation = (()=>{
//         console.log("FUNC CALLED")
//         return([5,5,5])
//     })



it('Renders dashboard',async () => {
 
    Calls.getStats = jest.fn().mockImplementation(() => Promise.resolve([5,5,5]))
   
   const dashboard  = render(<Router>
    <Dashboard />
    </Router>, { initialState: {} })

  await waitFor(() => {
    expect(dashboard.container).toBeInTheDocument()
    expect(dashboard.getByText("Dashboard")).toBeInTheDocument()
    expect(dashboard.getAllByText("5")).toHaveLength(3) 
  });
    
    
    
  })

  // it('sets state',async () => {
  //   const dashboard = render(<Router>
  //   <Dashboard />
  //   </Router>, { initialState: {} })
  //   apiCalls.getStats = new Promise((resolve,reject) => { 
  //   return([5,5,5])})
       
    
  //    await act(() => sleep(500));
  //   expect(dashboard.getAllByText("5")).toHaveLength(3)
    
  // })

// it('Clears token',()=>{
//     const header = render(<Router>
//         <Header clearToken={mockClearToken}  currUser={{role:"USER",email:"testmail"}}/>
//         </Router>, { initialState: {} })
//         userEvent.click(header.getByText("Log Out"))
//         expect(mockClearToken).toHaveBeenCalled()
// })

// it('Renders header as admin', () => {
//     const header = render(<Router>
//     <Header currUser={{role:"ADMIN",email:"testmail"}}/>
//     </Router>, { initialState: {} })
  
//     expect(header.getByText("Users")).toBeInTheDocument()
//   })