import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './home/home'
import NewApp from './NewApp/newApp'
import RenewApp from './renewApp/renewApp'


function App() {
  


  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/" element={<Home/>}></Route>
        <Route path="/newApp" element={<NewApp/>}></Route>
        <Route path="/renewApp" element={<RenewApp/>}></Route>

      </Routes>
    
    </BrowserRouter>
  )
}

export default App
