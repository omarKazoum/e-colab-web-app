import React from 'react'
import { Fragment, useState } from 'react'
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

const navigation = [
  { name: 'Profil', href: '#', icon: UserIcon, current: true },
  { name: 'Demandes', href: '#', icon: PencilAltIcon, current: false },
  { name: 'Planning', href: '#', icon: CalendarIcon, current: false },
  // { name: 'Dashboard', href: '#', icon: LogoutIcon, current: false },
  // { name: 'Team', href: '#', icon: UsersIcon, current: false },
  // { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html className="h-full bg-gray-100">
        <body className="h-full">
        ```
      */}
      <div className="hidden md:flex md:w-24 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 my-3 px-4">
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              /> */}
              <a href="#" className="flex items-center relative -mt-0.5 order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center">
                <span className="text-l font-black leading-none text-blue-700 select-none logo whitespace-nowrap ">E-Collab</span>
              </a>
              {/* logo space */}
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
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
                </a>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
                <div>
                  <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                    
                      <a
                        href="#"
                        className={classNames(
                          // item.current ? 'bg-gray-100 text-gray-900' :
                            'text-red-500 hover:bg-grey-500 hover:text-red-600',
                          'group flex flex-col items-center px-2 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <LogoutIcon
                          className={classNames(
                            // item.current ? 'text-sky-500' :
                              'text-red-500 group-hover:text-red-600',
                            'm-auto flex-shrink-0 h-10 w-10'
                          )}
                          aria-hidden="true"
                        />
                        Logout
                      </a>
                    
                  </nav>
                  </div>
                  {/* <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                </div> */}
            </a>
          </div>
        </div>
      </div>      
    </>
  )
}
