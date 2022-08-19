import React from "react";
import { useState } from "react";
export default function Modal({ visible, showMethod }) {
  let content = (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white divide-y divide-cyan-600 rounded p-5">
        <div>
        <h2 className="">My Modal</h2>
        </div>
        <div>

        <div>
          <label htmlFor="date">Date de la demande</label>
          <input type="date" id="date" />
        </div>
        <div>
          <label htmlFor="mode">Mode de travail</label>
          <select id="mode">
            <option value="">Mode de travail</option>
            <option value="teletravail">Télétravail</option>
            <option value="site">Sur site</option>
          </select>
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <select id="position">
            <option value="">Position</option>
            <option value="teletravail">Télétravail</option>
            <option value="site">Sur site</option>
          </select>
        </div>
        <div className="flex justify-around">
          <button className="bg-pink-500 text-white rounded px-2">
            Ajouter
          </button>
          <button
            className="bg-black text-white rounded px-4"
            onClick={() => {
              showMethod(false);
            }}
          >
            hide
          </button>
        </div>
        </div>
      </div>
    </div>
  );
  return <div>{visible && content}</div>;
}
