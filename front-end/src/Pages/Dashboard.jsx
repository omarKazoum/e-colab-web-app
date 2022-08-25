import React, {useContext, useEffect} from 'react'
import { Fragment, useState } from 'react'
import "./../index.css"
import Sidebar from './../Components/Sidebar/SidebarComp'


import {UserDataContext} from "../App";
import {useNavigate} from "react-router-dom";


export default function Example(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  let {connectedUserData}=useContext(UserDataContext);
  let navigate=useNavigate();

  useEffect(()=>{
    if(connectedUserData==null)
       navigate("/login")
  })
  return (
    <>
      <div>
            <Sidebar userRole={connectedUserData!=null?connectedUserData.user.role_id:null} />
        <div className="md:pl-24 flex flex-col flex-1">
          <main className="flex-1">
                {props.calendar}
                {props.demande}
                {props.Home}
                {props.Emplacement}
          </main>
        </div>
      </div>
    </>
  )
}
