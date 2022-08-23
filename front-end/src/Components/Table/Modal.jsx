import React from "react";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../App";
import { useRef } from "react";

// const handleAdd = async (e) => {
//   e.preventDefault();
//   console.log(formData);
// try {
//   const res = await axios.post("http://127.0.0.1:8000/api/login", formData);
//   //login success
//   setUserData(res.data);
//   console.log(res.data);
// }catch(er){
//   //login failed
//   console.log(er)
//   setError(er.response.data.message);
// }
// }

export default function Modal({ visible, showMethod, refreshParent }) {
  const [date, setDate] = useState("");
  const [mode, setMode] = useState("");
  const [position, setPosition] = useState("");
  const [err, setErr] = useState(null);
  const [displayDiv, setDisplayDiv] = useState(false);

  let { connectedUserData } = useContext(UserDataContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (connectedUserData == null) navigate("/login");
    console.log(connectedUserData);
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (mode === "" ) {
      setErr("some field is empty");
    } else {
      var data = {
        date: date,
        type_id: mode,
        position_id: position,
      };
      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/membre/requests/create",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + connectedUserData.token,
          data,
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          refreshParent();
          showMethod(false);
        })
        .catch(function (error) {
          // Object.values()
          console.log(data);
          console.log(error);
        });
    }
  };

  let content = (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white lg:w-2/4 divide-y-4 divide-cyan-600 rounded">
        <div className=" pt-5 px-5">
          <h2 className="px-2 pb-3 font-bold">Créé une nouvelle demande</h2>
        </div>
        <div className=" p-5 ">
          {/* <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Error! Task failed successfully.</span>
            </div>
          </div> */}
          {err ? (
            <span className="alert alert-error shadow-lg"> {err} </span>
          ) : null}
          <form onSubmit={handleAdd}>
            <div className="flex flex-col p-2 items-center">
              <label
                htmlFor="Date de la demande"
                className="mb-2 font-semibold justify-items-start w-full max-w-lg "
              >
                Date de la demande
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                id="date"
                className="w-full max-w-lg rounded-lg border  border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
              />
            </div>

            <div className="flex flex-col p-2 items-center">
              <label
                htmlFor="text"
                className="mb-2 font-semibold w-full max-w-lg"
              >
                Mode de travail
              </label>
              <select
                required
                id="mode"
                onChange={(e) => setMode(e.target.value)}
                className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
              >
                <option disabled selected>
                  Select Mode de travail
                </option>
                <option value="2">Télétravail</option>
                <option value="1">Sur site</option>
              </select>
            </div>
            {mode === "1" ? (
              <div className="flex flex-col p-2 items-center">
                <label
                  htmlFor="position"
                  className="mb-2 font-semibold w-full max-w-lg"
                >
                  Position
                </label>
                <select
                  id="position"
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
                >
                  <option disabled selected>
                    Select Position
                  </option>
                  <option value="1">Pos 1</option>
                  <option value="2">Pos 2</option>
                  <option value="3">Pos 3</option>
                  <option value="4">Pos 4</option>
                </select>
              </div>
            ) : null}

            <div className="flex justify-around py-4">
              <button
                className="bg-gray-500 text-white text-sm rounded-3xl p-1 px-10"
                onClick={() => {
                  showMethod(false);
                }}
              >
                Annuler
              </button>
              <button
                className="bg-cyan-600 text-white rounded-3xl p-1 px-10"
                type="submit"
              >
                Confirmer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  return <div>{visible && content}</div>;
}