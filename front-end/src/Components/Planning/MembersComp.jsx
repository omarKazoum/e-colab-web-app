import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import UserCard from './UserCard'
import { Fragment } from "react";
import {useContext, useEffect, useState} from "react"

import {UserDataContext} from "../../App";



export default function MembersComp({data}) {
    let {connectedUserData,setUserData}=useContext(UserDataContext);
    let [membersListData,setMembersListData]=useState(data)
    //console.log(data.plannings)
    //return <div></div>
    useEffect(()=>{
      //let's filter and update memebers list data
      if(data!=null){
        let membersList=data.plannings.filter(planning=>
          planning.team_id==connectedUserData.user.team_id
         )
         console.log("user data frim memebers",membersList)
         membersList.forEach(m=> console.log(m))
      }
      
    },[data])
    return (
    <section className="pt-14 px-8 md:mt-0 h-full  bg-blue-quarter md:p-7 ">
        <form>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
                Search
            </label>
            <div className="relative">
                <input
                    type="search"
                    id="default-search"
                    className="block px-4 py-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                    required
                ></input>
                <button
                    type="submit"
                    className="text-white absolute  right-0 top-0 bottom-0 bg-pink-600 hover:bg-pink-700 focus:ring-4 font-medium rounded-lg text-sm px-2 py-2"
                >
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </button>
            </div>
        </form>
        <ol className="mt-4 space-y-2 text-sm leading-6 p-2 rounded-lg h-5/6 text-gray-500 bg-white">
            {membersListData!=null?membersListData.map(membre=> <li>gggg</li>)
             : (
                <p>No data for this day.</p>
            )}
        </ol>
    </section>
    );
}

