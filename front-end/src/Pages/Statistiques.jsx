import React from 'react'
import CardStatistic from '../Components/card/CardStatistic'
import CharteStatistique1 from '../Components/charte/CharteStatistique1'
import CharteStatistique2 from '../Components/charte/CharteStatistique2'
import { Bar } from 'react-chartjs-2'
import BarChart from '../Components/charte/Barchart'

const statistiques = () => {
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