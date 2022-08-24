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
  const [numbers, setNumbers] = useState(0);
  const user = JSON.parse(sessionStorage.getItem("connectedUserData"));

  var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'http://127.0.0.1:8000/api/statistiques/chartMethode',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Bearer 6|CpNaAW4NMEzXWQPDxQIXd2jThq82DVv1jvvHPybT'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
 
  useEffect(() => {
    chartPresence();
  }, []);

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
