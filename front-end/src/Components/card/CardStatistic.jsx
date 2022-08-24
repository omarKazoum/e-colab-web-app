import * as React from 'react';
import {UserIcon,ChevronRightIcon} from '@heroicons/react/solid'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'






export default function CardStatistic() {
   //get connected user data
   let {connectedUserData}=useContext(UserDataContext);
   //use states for cards
   let [employesCount,setEmployeesCount]=useState(null);
   let [managersCount,setManagersCount]=useState(null);
   let [teamsCount,setTeamsCount]=useState(null);

   //loading emplyees count
      useEffect(()=>{
         let Bearer=connectedUserData.token;
         let link='http://127.0.0.1:8000/api/statistiques/chartMethode'
         let axios = require('axios');
         let data = '';

         let config = {
         method: 'get',
         url: link,
         headers: { 
            'Accept': 'application/json', 
            'Authorization': 'Bearer '+Bearer
         },
         data : data
         };

         axios(config)
         .then(function (response) {
            console.log(JSON.stringify(response.data));
         })
         .catch(function (error) {
            console.log(error);
         });
      },[])

   

  return (
      // <div className=' my-0 '>
        <div className="grid grid-cols-1 w-4/5 mx-auto sm:grid-cols-2 lg:grid-cols-3 rounded-lg px-8 gap-8 " >
        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] py-6 px-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
           <div className=" flex flex-col gap-10">
            <UserIcon className="w-10 h-10" aria-hidden="true" />
              <h3 className=''>Collaborateurs</h3>
              <p className="text-5xl text-gray-100">{employesCount||'---'}</p>
           </div>
           
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] py-6 px-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
           <div className=" flex flex-col gap-10">
            <UserIcon className="w-10 h-10" aria-hidden="true" />
              <h3 className=''>Manager</h3>
              <p className="text-5xl text-gray-100">{managersCount||'---'}</p>
           </div>
           
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] py-6 px-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
           <div className=" flex flex-col gap-10">
            <UserIcon className="w-10 h-10" aria-hidden="true" />
              <h3 className=''>équipe</h3>
              <p className="text-5xl text-gray-100">{teamsCount||'---'}</p>
           </div>
           
        </div>
        </div>
      //  </div>
    )
}








   