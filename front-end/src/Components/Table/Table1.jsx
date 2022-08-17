import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../App.css";
// import { classNames } from "./Table/utility";
import Modal from "./Modal.jsx";

const role = "membre";

function Table1() {
  let [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/api/membre/requests/",
      headers: {
        Authorization: "Bearer 10|lM66D7NwgWn9mqJY2kBSw9hd7A34I54fljdwzoS8",
        // get the access token from local storage
      },
      withCredentials: false,
    })
      .then((res) => {
        // res.data=[]

        setDataTable(res.data);
        console.log(res.data)
        // console.log(dataTable);
      })
      .catch((err) => console.log(err));
  };
  const columns = [
    { heading: "ID", value: "id" },
    { heading: "Créateur", value: "creator_id" },
    { heading: "Position demandé", value: "position_id" },
    { heading: "Date de travail", value: "created_at" },
    { heading: "status", value: "request_status_id" },
    { heading: "Action" },
    { heading: "Action" },
    { heading: "Action" },
  ];

  const [visible, setShowModal] = useState(false);

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-5 mb-3 flex justify-between">
          <h2>Demandes de mon équipe</h2>
          <button
            className="bg-pink-700 text-white px-3 rounded"
            onClick={() => setShowModal(true)}
          >
            Add
          </button>
        </div>
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full table-fixed divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map((item, index) => (
                    <TableHeadItem key={index + "_head"} item={item} />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {dataTable.map((item, index) => (
                  
                  <TableRow
                    key={index + "_item_row"}
                    item={item}
                    column={columns.heading}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal visible={visible} showMethod={setShowModal} />
    </div>
  );
}

// tavvble row head item
const TableHeadItem = ({ item }) => (
  <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
    {item.heading}
  </th>
);
const TableRow = ({ item, column }) => {
  // return a span elemnt
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

  const getButton = (role) => {
    if (role === "manager") {
      return (
        <div>
          <button
            className="button bg-red-500 mx-1 text-white rounded px-2"
            onClick={() => {
              console.log("Annuler");
            }}
          >
            Annuler
          </button>
          <button
            className="bg-green-500 mx-1 rounded px-2 text-white"
            onClick={() => {
              console.log("accepter");
            }}
          >
            Accepter
          </button>
          <button
            className="bg-red-500 mx-1 rounded px-2 text-white"
            onClick={() => {
              console.log("refuser");
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
  let rowContent = [];
  Object.keys(item).forEach((k) => {
    let v = item[k];
    rowContent.push(
      <td
        key={item.id + "_td_item" + Math.random()}
        className={[k === "status" ? "text-red-10" : null]}
      >
        {k !== "status" ? v : getStatusString(v)}
      </td>
    );
  });

  rowContent.push(<td className="py-2">{getButton(role)}</td>);
  return <tr>{rowContent}</tr>;
};
export default Table1;
