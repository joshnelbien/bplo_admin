import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppTrack from './applicationTracker/appTrack'
import Home from './home/home'
import Login from './login/login'
import NewApp from './NewApp/newApp'
import RenewApp from './renewApp/renewApp'


function App() {
  


  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/newApp" element={<NewApp/>}></Route>
        <Route path="/renewApp" element={<RenewApp/>}></Route>
         <Route path="/apptrack" element={<AppTrack/>}></Route>
        <Route path="/" element={<Login/>}></Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
