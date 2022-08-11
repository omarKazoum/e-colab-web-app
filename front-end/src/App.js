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
import DownNavbar from './Components/Sidebar/DownNavbar'


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
        <Route path="/" element={<Dashboard />}>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Down" element={<DownNavbar />} />
          
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;