import React from "react";

import CardStatistic from "../Components/card/CardStatistic";
import CharteStatistique1 from "../Components/charte/CharteStatistique1";
import CharteStatistique2 from "../Components/charte/CharteStatistique2";
import Sidebar from "./../Components/Sidebar/SidebarComp";
import { Bar } from "react-chartjs-2";
import BarChart from "../Components/charte/Barchart";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

function Statistiques() {
  const [numbers, setNumbers] = useState(0);
  const user = JSON.parse(sessionStorage.getItem("connectedUserData"));
  const headers = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const chartPresence = async () => {
    // e.preventDefault();
    console.log(user);
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/statistiques/emloyeesCount", headers
      );
      console.log(res);
      setNumbers(res.data);    //data 
     
    } catch (er) {
      console.log(er);
    }
  };
 
  useEffect(() => {
    chartPresence();
  }, []);

  return (
    <div>
      <sidebar />
      <h2>statistiques</h2>
      <CardStatistic />
      <div className="grid grid-cols-1 w4/5 mx-auto sm:grid-col-2 lg:grid-cols-2 py-3 px-8 gap-8  ">
        <CharteStatistique1 />
        <CharteStatistique2 />
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
}
export default Statistiques;
