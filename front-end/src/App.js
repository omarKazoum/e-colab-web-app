import React, {createContext, useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Sidebar from './Components/Sidebar/SidebarComp'
import Callendar from './Components/Planning/PlaningComp'
import Table1 from './Components/Table/Table1'


import DownNavbar from '../src/Components/Sidebar/DownNavbar'
import LoginForm from './Pages/LoginForm';
import '../src/App.css'

import Home from './Components/Home/card'

const roles = {
  superAdmin: "superAdmin",
  admin: "admin",
  stockManager: "stockManager",
  agentCustomer: "agentCustomer",
  shipManager: "shipManager",
};
export const UserDataContext=createContext()

function App() {
  let [connectedUserData,setUserData]=useState( JSON.parse(sessionStorage.getItem('connectedUserData')));
  useEffect(()=>{
    sessionStorage.setItem('connectedUserData',JSON.stringify(connectedUserData))
  },[connectedUserData])
  return (
      <UserDataContext.Provider value={{connectedUserData,setUserData}}>
        <div>
        <Routes>
          {/* <Route path="/" element={<Dashboard  />}/> */}
          <Route path="/Home" element={<Dashboard Home={<Home />} />}/>
          <Route path="/" element={<Dashboard cal1={<Home />} />}/>
          <Route path="/callendar" element={<Dashboard cal2={<Callendar />} />}/>
          <Route path="/Demandes" element={<Dashboard cal2={<Table1 />} />}/>

          <Route path="/Login" element={<LoginForm />}/>
          <Route path="/Planning" element={<Callendar />} />

          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/Down" element={<DownNavbar />} />

          {/* page not found */}
          <Route path='*' element={<div  style={{color:"red"}}>page not found</div>} />

           {/*Home*/ }
           <Route path='/Home' element={<Home />}/>

        </Routes>
      </div>
      </UserDataContext.Provider>
  );
}

export default App;