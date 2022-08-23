import React, {createContext, useContext, useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard'
import Sidebar from './Components/Sidebar/SidebarComp'
import Calendar from './Components/Planning/PlaningComp'
import Emplacement from './Pages/Emplacement';
import Table from './Components/Table/TableDemandes'


import DownNavbar from '../src/Components/Sidebar/DownNavbar'
import LoginForm from './Pages/LoginForm';
import Statistiques from './Pages/Statistiques';
import '../src/App.css'

import Home from './Components/Home/Home'
import Header from "./Components/Emplacement/Header";

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
          <Route path="/" element={<Dashboard Home={<Home />} />}/>
          <Route path="/calendar" element={<Dashboard calendar={<Calendar />} />}/>
          <Route path="/Demandes" element={<Dashboard demande={<Table />} />}/>
          <Route path="/emplacement" element={<Dashboard Emplacement={<Emplacement />} />}/>

          <Route path="/Login" element={<LoginForm />}/>
          <Route path="/Planning" element={<Callendar />} />
        <Route path="/statistiques" element={<Statistiques />} />
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