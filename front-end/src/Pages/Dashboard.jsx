import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import "./../index.css"
import Sidebar from './../Components/Sidebar/SidebarComp'
import Callendar from '../Components/Planning/PlaningComp'

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

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>

      <div>
        {/* --------------- Static sidebar for desktop ---------------*/}
            <Sidebar />

        {/*--------------- content space --------------- */}
        <div className="md:pl-24 flex flex-col flex-1">
          <main className="flex-1">
            <div className="py-7">
              {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div> */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                < Callendar />
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
