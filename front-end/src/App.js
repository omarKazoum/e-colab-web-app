// import React from 'react'
// // import Sidebar from './Components/Sidebar/SidebarComp'
// import Sidebar from './Pages/Dashboard'

// function App() {
//   return (
//     <div>
//       <Sidebar />
//     </div>
//   )
// }

// export default App

import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Sidebar from './Components/Sidebar/SidebarComp'
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
        <Route path="/" element={<Dashboard />}/>
        
        <Route path="/Login" element={<LoginForm />}/>
        
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Down" element={<DownNavbar />} />
          
        
      </Routes>
    </div>
  );
}

export default App;