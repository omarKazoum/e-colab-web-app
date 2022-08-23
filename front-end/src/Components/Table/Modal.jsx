import React from "react";
import { useState } from "react";
export default function Modal({ visible, showMethod }) {
  let content = (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white lg:w-2/4 divide-y-4 divide-cyan-600 rounded">
        <div className=" pt-5 px-5">
          <h2 className="px-2 pb-3 font-bold">Créé une nouvelle demande</h2>
        </div>
        <div className=" p-5">
          <div class="flex flex-col p-2">
            <label htmlfor="text" class="mb-2 font-semibold">Date de la demande</label>
            <input type="date" id="date" class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
          </div>

          <div class="flex flex-col p-2">
            <label htmlfor="text" class="mb-2 font-semibold">Date de la demande</label>
            <select id="mode" class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" >
              <option value="">Mode de travail</option>
              <option value="teletravail">Télétravail</option>
              <option value="site">Sur site</option>
            </select>
          </div>

          <div class="flex flex-col p-2">
            <label htmlfor="position" class="mb-2 font-semibold">Position</label>
            <select id="position" class="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" >
              <option value="">Position</option>
              <option value="teletravail">Télétravail</option>
              <option value="site">Sur site</option>
            </select>
          </div>

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
