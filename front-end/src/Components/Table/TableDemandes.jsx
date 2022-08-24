import {
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
// import {  useState } from "react";
import "../../App.css";
// import { classNames } from "./Table/utility";
import Modal from "./Modal.jsx";
import Badge from "../Badge";
import { UserDataContext } from "../../App";
const role = "membre";




function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TableDemandes() {
  let { connectedUserData } = useContext(UserDataContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (connectedUserData == null) navigate("/login");
    console.log(connectedUserData);
  }, []);
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedrequests, setSelectedrequests] = useState([]);



// fucntion that handle buttons display 
  const getButton = (role, requestId, statusId) => {

    const handleDelete = (requestId) => {
      var body = {
        type_id: "1",
        position_id: "1",
        date: "16-08-2022",
      };
      var config = {
        method: "get",
        url: "http://127.0.0.1:8000/api/manager/requests/reject/" + requestId,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + connectedUserData.token,
        },
        data: body,
      };
  
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      getUsers();
    };

    const handleAccept = (requestId) => {
      var body = {
        type_id: "1",
        position_id: "1",
        date: "16-08-2022",
      };
      var config = {
        method: "get",
        url: "http://127.0.0.1:8000/api/manager/requests/confirm/" + requestId,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + connectedUserData.token,
        },
        data: body,
      };
  
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      getUsers();
    };

    const handleCancel = (requestId) => {
      var config = {
        method: "get",
        url: "http://127.0.0.1:8000/api/membre/requests/cancel/" + requestId,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + connectedUserData.token,
        }
      };
  
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
      getUsers();
    };

    // manager
    if (role === "2") {
      if (statusId == "1") {
        return (
          <div>
            <button
              className="bg-green-500 mx-1 rounded px-2 text-white"
              onClick={() => handleAccept(requestId)}
            >
              Accepter
            </button>
            <button
              className="bg-red-500 mx-1 rounded px-2 text-white"
              onClick={() => handleDelete(requestId)}
            >
              Refuser
            </button>
          </div>
        );
      }
    }
    // user
    else {
      if (statusId == "1") {
        if (role === "1") {
          return (
            <button
              className="button bg-red-500 mx-1 text-white rounded px-2"
              onClick={() => handleCancel(requestId)}
            >
              Annuler
            </button>
          );
        }
      }
    }
  };


  useLayoutEffect(() => {
    const isIndeterminate =
      selectedrequests.length > 0 && selectedrequests.length < dataTable.length;
    setChecked(selectedrequests.length === dataTable.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedrequests]);

  function toggleAll() {
    setSelectedrequests(checked || indeterminate ? [] : dataTable);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  let [dataTable, setDataTable] = useState([]);
  // let [isLoading, setIsLoading] = useState(false);

  var link = "";
  if (String(connectedUserData.user.role_id) == "1") {
    link = "http://127.0.0.1:8000/api/membre/requests/";
  } else if (String(connectedUserData.user.role_id) == "2") {
    link = "http://127.0.0.1:8000/api/manager/requests/";
  }
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const headers = {
      headers: {
        Authorization: "Bearer " + connectedUserData.token,
      },
    };
    // console.log(link);
    const res = await axios.get(link, headers);
    try {
      console.log(res.data);
      setDataTable(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [visible, setShowModal] = useState(false);

  return (
    <div className="px-4 sm:px-6 bg-blue-page h-screen lg:px-8">
      <div className="sm:flex pt-32 sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Demandes de mon équipe MEEEMBRE
          </h1>
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
                      selectedrequests.forEach((element) => {
                        console.log("delete" + element.id);
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
                    <th
                      scope="col"
                      className="relative w-12 px-6 sm:w-16 sm:px-8"
                    >
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Createur
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Position demandé
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date de travail
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-centre text-sm font-semibold text-gray-900"
                    >
                      status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200  bg-white">
                  {dataTable?.map((request, index) => (
                    <tr
                      key={index}
                      className={
                        selectedrequests.includes(request)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selectedrequests.includes(request) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          // disabled={request.request_status_id === 2 || request.request_status_id === 3}
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
                          "whitespace-nowrap py-4 px-3 text-sm font-medium",
                          selectedrequests.includes(request)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        {request?.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {request?.creator?.first_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {request?.position_id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {request?.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Badge statusId={request?.status?.id}>
                          {request?.status?.label}
                        </Badge>
                      </td>
                      {/* {console.log(request?)} */}

                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {getButton(
                          String(connectedUserData.user.role_id),
                          request?.id,
                          request?.status?.id
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal visible={visible} showMethod={setShowModal} refreshParent={getUsers} />
    </div>
  );
}

// const getButton = (role, requestId, statusId) => {
//   // manager
//   const handleDelete = (requestId) => {
//     var body = {
//       type_id: "1",
//       position_id: "1",
//       date: "16-08-2022",
//     };
//     var config = {
//       method: "get",
//       url: "http://127.0.0.1:8000/api/manager/requests/reject/" + requestId,
//       headers: {
//         Accept: "application/json",
//         Authorization: "Bearer 1|LaaInOSL0bfPnBRO2oqQ08wfqn3rkOUc617YTNzk",
//       },
//       data: body,
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     getUsers();
//   };
//   if (role === "2") {
//     if (statusId == "1") {
//       return (
//         <div>
//           <button
//             className="bg-green-500 mx-1 rounded px-2 text-white"
//             onClick={() => {
//               console.log("accepter" + requestId);
//             }}
//           >
//             Accepter
//           </button>
//           <button
//             className="bg-red-500 mx-1 rounded px-2 text-white"
//             onClick={() => handleDelete(requestId)}
//           >
//             Refuser
//           </button>
//         </div>
//       );
//     }
//   }
//   // user
//   else {
//     if (role === "1") {
//       return (
//         <button
//           className="button bg-red-500 mx-1 text-white rounded px-2"
//           onClick={() => {
//             console.log("Annuler");
//           }}
//         >
//           Annuler
//         </button>
//       );
//     }
//   }
// };

const getStatusString = (s) => {
  if (s === 1)
    return (
      <span className="px-3 leading-wide font-bold text-xs rounded-full shadow-sm bg-green-100 text-green-800">
        Confirmé
      </span>
    );
  else if (s === 0)
    return (
      <span className="px-3 my-2 leading-wide font-bold text-xs rounded-full shadow-sm bg-pink-100 text-pink-800">
        Refusé
      </span>
    );
  else if (s === 2) {
    return (
      <span className="px-3  leading-wide font-bold text-xs rounded-full shadow-sm bg-yellow-100 text-yellow-800">
        En attente
      </span>
    );
  }
};

// if(role is membre){
//   demande accepté /refusé > aucun botton
//   demande en attente > butoon annuler
// }else if(role is manager){
//   demande en attent > deux button accepter et refuser
//   sinon pas de button

// }
