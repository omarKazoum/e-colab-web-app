import React, {useContext, useEffect} from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import "./../index.css"
import Sidebar from './../Components/Sidebar/SidebarComp'

import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
  UserIcon,
  // LogoutIcon,
  PencilAltIcon,
} from '@heroicons/react/solid' 
import {
  LogoutIcon,
} from '@heroicons/react/outline'
import {UserDataContext} from "../App";
import {useNavigate} from "react-router-dom";

const navigation = [
  { name: 'Profil', href: '#', icon: UserIcon, current: true },
  { name: 'Demandes', href: '#', icon: PencilAltIcon, current: false },
  { name: 'Planning', href: '#', icon: CalendarIcon, current: false },
//   { name: 'Dashboard', href: '#', icon: LogoutIcon, current: false },
//   { name: 'Team', href: '#', icon: UsersIcon, current: false },
  // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

function classNames(...classes) {   
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  let {connectedUserData,setUserData}=useContext(UserDataContext);
  let navigate=useNavigate();
  useEffect(()=>{
    if(connectedUserData==null)
      navigate("/login")
  })

  return (
    <>
      <div>
        {/* --------------- Static sidebar for desktop ---------------*/}
            <Sidebar />

        {/*--------------- content space --------------- */}
        <div className="md:pl-24 flex flex-col flex-1">
          <main className="flex-1">

                {/* Replace with your content */}
                {/* < Callendar /> */}
                {props.cal1}
                {props.cal2}
                {props.Home}
                {/* /End replace */}

          </main>
        </div>
      </div>
    </>
  )
}
