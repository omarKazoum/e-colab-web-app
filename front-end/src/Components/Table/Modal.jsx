import React from "react";
import { useState } from "react";

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

let handleAdd = async (e) => {
  // e.preventDefault();
  // try {
    //   let res = await fetch("https://httpbin.org/post", {
      //     method: "POST",
      body= JSON.stringify({
        date: date,
        mode: mode,
        position: position,
      })
//       ,
//     });
//     let resJson = await res.json();
//     if (res.status === 200) {
  //       setName("");
  //       setEmail("");
//       setMessage("User created successfully");
//     } else {
  //       setMessage("Some error occured");
  //     }
  //   } catch (err) {
    //     console.log(err);
    //   }
  };
  
  export default function Modal({ visible, showMethod }) {
    const [date, setDate] = useState("");
    const [mode, setMode] = useState("");
    const [position, setPosition] = useState("");
    let content = (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white lg:w-2/4 divide-y-4 divide-cyan-600 rounded">
        <div className=" pt-5 px-5">
          <h2 className="px-2 pb-3 font-bold">Créé une nouvelle demande</h2>
        </div>
        <div className=" p-5 ">
          <form onSubmit={handleAdd}>
            <div class="flex flex-col p-2 items-center">
              <label htmlfor="Date de la demande" class="mb-2 font-semibold justify-items-start w-full max-w-lg ">Date de la demande</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} id="date" class="w-full max-w-lg rounded-lg border  border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
            </div>

            <div class="flex flex-col p-2 items-center">
              <label htmlfor="text" class="mb-2 font-semibold w-full max-w-lg">Mode de travail</label>
              <select id="mode" value={mode} onChange={(e) => setMode(e.target.value)} class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" >
                <option value="">Mode de travail</option>
                <option value="teletravail">Télétravail</option>
                <option value="site">Sur site</option>
              </select>
            </div>

            <div class="flex flex-col p-2 items-center">
              <label htmlfor="position" class="mb-2 font-semibold w-full max-w-lg">Position</label>
              <select id="position" value={position} onChange={(e) => setPosition(e.target.value)} class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" >
                <option value="">Position</option>
                <option value="teletravail">Télétravail</option>
                <option value="site">Sur site</option>
              </select>
            </div>
          </form>

        <div className="flex justify-around py-4">
          <button
            className="bg-gray-500 text-white text-sm rounded-3xl p-1 px-10"
            onClick={() => {
              showMethod(false);
            }}
          >
            Annuler
          </button>
          <button className="bg-cyan-600 text-white rounded-3xl p-1 px-10">
            Confirmer
          </button>
        </div>
        </div>
      </div>
    </div>
  );
  return <div>{visible && content}</div>;
}
