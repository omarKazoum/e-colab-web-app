import React, {createContext, useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Sidebar from './Components/Sidebar/SidebarComp'
import Calendar from './Components/Planning/PlaningComp'
import Table from './Components/Table/TableDemandes'


import DownNavbar from '../src/Components/Sidebar/DownNavbar'
import LoginForm from './Pages/LoginForm';
import '../src/App.css'

import Home from './Components/Home/Home'

const roles = {
  superAdmin: "superAdmin",
  admin: "admin",
  stockManager: "stockManager",
  agentCustomer: "agentCustomer",
  shipManager: "shipManager",
};
export const UserDataContext=createContext();

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
          <Route path="/calendar" element={<Dashboard calendar={<Calendar />} />}/>
          <Route path="/Demandes" element={<Dashboard demande={<Table />} />}/>

          <Route path="/Login" element={<LoginForm />}/>

          <Route path="/Down" element={<DownNavbar />} />

          {/* page not found */}
          <Route path='*' element={<div  style={{color:"red"}}>page not found</div>} />

        </Routes>
      </div>
      </UserDataContext.Provider>
  );
}

export default App;