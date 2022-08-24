import * as React from 'react';
import {UserIcon,ChevronRightIcon} from '@heroicons/react/solid'
import {useContext, useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import {UserDataContext} from "../../App";






export default function CardStatistic() {
   //get connected user data
   let {connectedUserData}=useContext(UserDataContext);
   //use states for cards
   let [topCardsData,setTopCardsData]=useState(null);


   //loading employees count
      useEffect(()=>{


          let config = {
              method: 'get',
              url: 'http://127.0.0.1:8000/api/statistiques/cardsCounts',
              headers: {
                  'Authorization': 'Bearer '+connectedUserData.token
              }
          };

          axios(config)
              .then(function (response) {
                  setTopCardsData(response.data)
                  console.log('datat from back cards',response.data);

              })
              .catch(function (error) {
                  console.log(error);
              });

      },[connectedUserData])

   

  return (
      // <div className=' my-0 '>
        <div className="grid grid-cols-1 w-4/5 mx-auto sm:grid-cols-2 lg:grid-cols-3 rounded-lg px-8 gap-8 pt-10" >
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] p-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
               <div className=" flex flex-col gap-5">
                <UserIcon className="w-10 h-10" aria-hidden="true" />
                  <h3 className=''>Collaborateurs</h3>
                  <p className="text-5xl text-gray-100">{topCardsData!=null? topCardsData.emloyeesCount:'---'}</p>
               </div>

            </div>
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] py-6 px-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
               <div className=" flex flex-col gap-5">
                <UserIcon className="w-10 h-10" aria-hidden="true" />
                  <h3 className=''>Manager</h3>
                  <p className="text-5xl text-gray-100">{topCardsData!=null? topCardsData.managerCount:'---'}</p>
               </div>

            </div>
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-[12rem] py-6 px-6 hover:bg-gradient-to-l transition ease-in-out duration-300 cursor-pointer shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600  text-white font-medium group">
               <div className=" flex flex-col gap-5">
                <UserIcon className="w-10 h-10" aria-hidden="true" />
                  <h3 className=''>équipe</h3>
                  <p className="text-5xl text-gray-100">{topCardsData!=null? topCardsData.equipesCount:'---'}</p>
               </div>

            </div>
        </div>
      //  </div>
    )
}








   