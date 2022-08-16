import React from 'react'
import CardStatistic from '../Components/card/CardStatistic'
import CharteStatistique1 from '../Components/charte/CharteStatistique1'
import CharteStatistique2 from '../Components/charte/CharteStatistique2'

const statistiques = () => {
  return (
    <div>
        <h2>statistiques</h2>
        <CardStatistic />
        <div className='flex'>
        <CharteStatistique1 />
        <CharteStatistique2 />
      </div>
</div>
  )
}

export default statistiques