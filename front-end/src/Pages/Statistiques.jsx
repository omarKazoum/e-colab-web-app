import React from 'react'
import CardStatistic from '../Components/card/CardStatistic'
import CharteStatistique1 from '../Components/charte/CharteStatistique1'
import CharteStatistique2 from '../Components/charte/CharteStatistique2'
import { Bar } from 'react-chartjs-2'
import BarChart from '../Components/charte/Barchart'
import axios from "axios";
import {useContext, useEffect, useState} from "react"

const statistiques = async() => {
  
      const res = await axios.post("http://127.0.0.1:8000/api/statistiques/emloyeesCount");
      console.log(res.data);
    
  
  return (
    <div>
        <h2>statistiques</h2>
        <CardStatistic />
   <div className='flex justify-between  '>
        <CharteStatistique1 />
        <CharteStatistique2 />
   </div>
   <div >
      <BarChart/>
   </div>
</div>
  )

  }
export default statistiques