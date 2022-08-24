import React from "react";

import CardStatistic from "../Components/card/CardStatistic";
import CharteStatistique1 from "../Components/charte/CharteStatistique1";
import CharteStatistique2 from "../Components/charte/CharteStatistique2";
import Sidebar from '../Components/Sidebar/SidebarComp';
import { Bar } from "react-chartjs-2";
import BarChart from "../Components/charte/Barchart";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

function Statistiques() {

  return (
  <div className="bg-blue-quarter h-screen" >
             <Sidebar />
              
    <div>
      
          <CardStatistic />
        <div className="grid grid-cols-1 w-4/5 mx-auto sm:grid-col-2 lg:grid-cols-2 py-3 mt-10 gap-8  ">
               <CharteStatistique1 />
                <CharteStatistique2 />
        </div>
         <div>
                <BarChart />
        </div>
      </div>
  </div>
  );
}
export default Statistiques;
