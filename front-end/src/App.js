import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Sidebar from './Components/Sidebar/SidebarComp'
import Callendar from './Components/Planning/PlaningComp'

// import Test from './Me/test'

import DownNavbar from '../src/Components/Sidebar/DownNavbar'
import LoginForm from './Pages/LoginForm';
import '../src/App.css'


const roles = {
  superAdmin: "superAdmin",
  admin: "admin",
  stockManager: "stockManager",
  agentCustomer: "agentCustomer",
  shipManager: "shipManager",
};

function App() {
  return ( 
    <div>
      <Routes>
        {/* <Route path="/" element={<Dashboard  />}/> */}
        <Route path="/" element={<Dashboard cal1={<Callendar />} />}/>
        <Route path="/callendar" element={<Dashboard cal2={<Callendar />} />}/>

        <Route path="/Login" element={<LoginForm />}/>
        <Route path="/Planning" element={<Callendar />} />
  


        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Down" element={<DownNavbar />} />
        {/* <Route path='/test' element={<Test />} /> */}
        {/* page not found */}
        <Route path='*' element={<div  style={{color:"red"}}>page not found</div>} />
          
        
      </Routes>
    </div>
  );
}

export default App;