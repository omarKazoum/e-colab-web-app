import * as React from 'react';
import {UserIcon,ChevronRightIcon} from '@heroicons/react/solid'

export default function CardStatistic() {
  return (
      // <div className=' my-0 '>
        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 py-3 px-8 gap-8 ">
        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] py-6 px-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
           <div className=" flex flex-col gap-10">
            <UserIcon className="w-10 h-10" aria-hidden="true" />
              <h3 className=''>Collaborateurs</h3>
              <p className="text-5xl text-gray-100">1000</p>
           </div>
           
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] py-6 px-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
           <div className=" flex flex-col gap-10">
            <UserIcon className="w-10 h-10" aria-hidden="true" />
              <h3 className=''>Manager</h3>
              <p className="text-5xl text-gray-100">100</p>
           </div>
           
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] py-6 px-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
           <div className=" flex flex-col gap-10">
            <UserIcon className="w-10 h-10" aria-hidden="true" />
              <h3 className=''>équipe</h3>
              <p className="text-5xl text-gray-100">14</p>
           </div>
           
        </div>
        </div>
      //  </div>
    )
}








   