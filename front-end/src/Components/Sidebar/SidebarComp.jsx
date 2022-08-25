import React, {useContext} from 'react'
import Logo from '../Sidebar/logo-3.png'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
// import { Dialog, Transition } from '@headlessui/react'
import "./../../index.css"
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
import {UserDataContext} from "../../App";
import {useNavigate} from "react-router-dom";

let navigation = [
  { name: 'Profil', href: '/', icon: UserIcon, current: true },
  { name: 'Demandes', href: '/demandes', icon: PencilAltIcon, current: false },
  { name: 'Planning', href: '/calendar', icon: CalendarIcon, current: false },
    {name: 'Statistiques', href: '/statistiques', icon: CalendarIcon, current: false },

  // { name: 'Dashboard', href: '#', icon: LogoutIcon, current: false },
  // { name: 'Team', href: '#', icon: UsersIcon, current: false },
  // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]
const MEMBRE_ROLE_ID=1;
const MANAGER_ROLE_ID=2;
const RH_ROLE_ID=3;
const CHEF_BU_ROLE_ID=4;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({userRole}) {
    let {connectedUserData,setUserData}=useContext(UserDataContext);
    const navigate=useNavigate();
    console.log('user role from sidebar',userRole)
    //if the user does not have the role rh or head of bu we remove stats from the menu

    if([RH_ROLE_ID,CHEF_BU_ROLE_ID].includes(userRole)) {
        //rh
        navigation.splice(1, 2)
        console.log('the user is a rh ')
    }
    else{
        //membre or manager
        navigation.splice(3,1)
        console.log('the user is a membre ');}
    return (

      <div className="hidden md:flex md:w-24 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 my-3 px-4">
              <Link to="#" className="flex items-center relative -mt-0.5 order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center">
                <img  src={Logo} />
              </Link>
              {/* logo space */}
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex flex-col items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-sky-500' : 'text-sky-400 group-hover:text-sky-700',
                      'm-auto flex-shrink-0 h-10 w-10'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}    
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
                <div>
                  <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                    
                      
                      <div
                        className={classNames(
                          // item.current ? 'bg-gray-100 text-gray-900' :
                            'text-red-500 hover:bg-grey-500 hover:text-red-600',
                          'group flex flex-col items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <LogoutIcon
                            onClick={()=>{
                              setUserData(null);
                              navigate('/login')
                            }}
                          className={classNames(
                            // item.current ? 'text-sky-500' :
                              'text-red-500 group-hover:text-red-600',
                            'm-auto flex-shrink-0 h-10 w-10'
                          )}
                          aria-hidden="true"
                        />
                        Logout
                      </div>
                    
                  </nav>
                  </div>
            </a>
          </div>
        </div>
      </div>      
  )
}
