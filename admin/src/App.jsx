import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from './DASHBOARD/dashboard'
import New_records from './NEW_RECORDS/new_records'
import Renew_records from './RENEW_RECORDS/renew_records'
import Profile from './PROFILE/profile'

function App() {


  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/new_records" element={<New_records/>}></Route>
        <Route path="/renew_records" element={<Renew_records/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
