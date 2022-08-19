import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import React from "react";
import axios from "axios";
// import {  useState } from "react";
import "../../App.css";
// import { classNames } from "./Table/utility";
import Modal from "./Modal.jsx";
import Badge from  '../Badge'
const role = "membre";
  
        {/* from here */}

// function Table1() {
//   let [dataTable, setDataTable] = useState([]);
//   useEffect(() => {
//     getUsers();
//   }, []);
//   const getUsers = () => {
//     axios({
//       method: "get",
//       url: "http://127.0.0.1:8000/api/membre/requests/",
//       headers: {
//         Authorization: "Bearer 10|lM66D7NwgWn9mqJY2kBSw9hd7A34I54fljdwzoS8",
//         // get the access token from local storage
//       },
//       withCredentials: false,
//     })
//       .then((res) => {
//         res.data=[
//           {
//               "id": 3,
//               "created_at": "2022-08-16T19:01:25.000000Z",
//               "creator_id": 1,
//               "type_id": 1,
//               "position_id": 1,
//               "request_status_id": 1,
//               "updated_at": "2022-08-12T14:17:33.000000Z"
//           }
//       ]
  
//         setDataTable(res.data);
//         console.log(res.data)
//         // console.log(dataTable);
//       })
//       .catch((err) => console.log(err));
//   };
        {/* to here */}


 const dataTable = [
    {
          "id": 1,
          "created_at": "2022-08-16T19:01:25.000000Z",
          "creator_id": 1,
          "type_id": 1,
          "position_id": 1,
          "request_status_id": 1,
          "updated_at": "2022-08-12T14:17:33.000000Z"
      },
      {
        "id": 2,
        "created_at": "2022-08-16T19:01:25.000000Z",
        "creator_id": 1,
        "type_id": 1,
        "position_id": 1,
        "request_status_id": 0,
        "updated_at": "2022-08-12T14:17:33.000000Z"
      },
      {
        "id": 3,
        "created_at": "2022-08-16T19:01:25.000000Z",
        "creator_id": 1,
        "type_id": 1,
        "position_id": 1,
        "request_status_id": 2,
        "updated_at": "2022-08-12T14:17:33.000000Z"
      }
  ]

  const columns = [
    { heading: "ID", value: "id" },
    { heading: "Créateur", value: "creator_id" },
    { heading: "Position demandé", value: "position_id" },
    { heading: "Date de travail", value: "created_at" },
    { heading: "status", value: "request_status_id" },
    { heading: "" },
    // { heading: "Action" },
    // { heading: "Action" },
  ];

  
  const requests = [
      {
          name: 'Lindsay Walton',
          title: 'Front-end Developer',
          email: 'lindsay.walton@example.com',
          role: 'Member',
        },
        // More requests...
    ]
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    
    export default function Example() {
        const checkbox = useRef()
        const [checked, setChecked] = useState(false)
        const [indeterminate, setIndeterminate] = useState(false)
        const [selectedrequests, setSelectedrequests] = useState([])
        {/* from here */}
        
        {/* to here */}

    useLayoutEffect(() => {
        const isIndeterminate = selectedrequests.length > 0 && selectedrequests.length < dataTable.length
        setChecked(selectedrequests.length === dataTable.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedrequests])

    function toggleAll() {
        setSelectedrequests(checked || indeterminate ? [] : dataTable)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    // let [dataTable, setDataTable] = useState([]);

    // useEffect(() => {
    //     getUsers();
    // }, []);
    // const getUsers = () => {
    //     axios({
    //     method: "get",
    //     url: "http://127.0.0.1:8000/api/membre/requests/",
    //     headers: {
    //         Authorization: "Bearer 10|lM66D7NwgWn9mqJY2kBSw9hd7A34I54fljdwzoS8",
    //         // get the access token from local storage
    //     },
    //     withCredentials: false,
    //     })
    //     .then((res) => {
    //         res.data=[
    //         {
    //             "id": 3,
    //             "created_at": "2022-08-16T19:01:25.000000Z",
    //             "creator_id": 1,
    //             "type_id": 1,
    //             "position_id": 1,
    //             "request_status_id": 1,
    //             "updated_at": "2022-08-12T14:17:33.000000Z"
    //         }
    //     ]
    
    //         setDataTable(res.data);
    //         console.log(res.data)
    //         // console.log(dataTable);
    //     })
    //     .catch((err) => console.log(err));
    // };
    const [visible, setShowModal] = useState(false);

  return (
      <div className="px-4 sm:px-6 bg-blue-page h-screen lg:px-8">
        
        {/* from here */}
        {/* <div className="mt-5 mb-3 flex justify-between">
          <h2>Demandes de mon équipe</h2>
          <button
            className="bg-pink-700 text-white px-3 rounded"
            onClick={() => setShowModal(true)}
          >
            Add
          </button>
        </div> */}
        {/* to here */}

      <div className="sm:flex pt-32 sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Demandes de mon équipe</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700  sm:w-auto"
            onClick={() => setShowModal(true)}
          >
            Add 
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selectedrequests.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3  sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-green-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-green-300 disabled:opacity-30"
                  >
                    Tous accepter
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-red-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-red-300 disabled:opacity-30"
                    onClick={() => {
                        selectedrequests.forEach(element => {
                            
                            console.log("delete"+element.id);
                        });
                      }}
                  >
                    Tous refuser
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="bg-blue-principale text-center">
                  <tr>
                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                        ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Createur
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Position demandé
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date de travail
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        status
                    </th>
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th> */}
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200  bg-white">
                  {dataTable.map((request) => (
                    <tr key={request.id} className={selectedrequests.includes(request) ? 'bg-gray-50' : undefined}>
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedrequests.includes(request) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={request.id}
                          checked={selectedrequests.includes(request)}
                          onChange={(e) =>
                            setSelectedrequests(
                              e.target.checked
                                ? [...selectedrequests, request]
                                : selectedrequests.filter((p) => p !== request)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedrequests.includes(request) ? 'text-indigo-600' : 'text-gray-900'
                        )}
                      >
                        {request.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{request.creator_id}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{request.position_id}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{request.date}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{request.request_status_id}</td>
                      {/* <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {request.name}</span>
                        </a>
                      </td> */}
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{getButton("manager",request.id)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={visible} showMethod={setShowModal} />
    </div>
  )
}

const getButton = (role,id) => {
    if (role === "manager") {
      return (
        <div>
          <button
            className="button bg-red-500 mx-1 text-white rounded px-2"
            onClick={() => {
              console.log("Annuler"+id);
            }}
          >
            Annuler
          </button>
          <button
            className="bg-green-500 mx-1 rounded px-2 text-white"
            onClick={() => {
              console.log("accepter"+id);
            }}
          >
            Accepter
          </button>
          <button
            className="bg-red-500 mx-1 rounded px-2 text-white"
            onClick={() => {
              console.log("refuser"+id);
            }}
          >
            Refuser
          </button>
        </div>
      );
    } else {
      return (
        <button
          className="button bg-red-500 mx-1 text-white rounded px-2"
          onClick={() => {
            console.log("Annuler");
          }}
        >
          Annuler
        </button>
      );
    }
  };
