import React from 'react'
import { render, waitFor} from '@testing-library/react'
import {BrowserRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Dashboard from './Dashboard'
import * as Calls from '../../apiCalls/apiCalls'

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
