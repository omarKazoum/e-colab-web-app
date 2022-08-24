// import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title ,Tooltip, LineElement,Legend ,CategoryScale ,LinearScale ,PointElement} from 'chart.js';
import { useState } from 'react';
ChartJS.register(
    Title ,Tooltip, LineElement,Legend,CategoryScale,LinearScale,PointElement
)
export default function CharteStatistique1() {
    /*

    {
        labels:["1","2","3","4","5","6","7","8","9","10","11","12","3","4","5","6","7","8","9","10"],
        datasets:[
            {
                label:"Fdataset",
                data:[12, 5, 26, 23, 1,5,7,8,6,2,4],   //:{ $nbrPresence}
                backgroundColor:'gray',
                borderColor:'blue',
                tension:'0.4',
                pointStyle:'rect'
            }
        ]
    }

     */

    let [data, setData]=useState(null)

    return(
        <div className='bg-white h-full  rounded-lg px-6 py-2'>
            <h1 className='text-xl px-6'>taux de presence ce mois</h1>
            <Line data={data} >Hello</Line>
        </div>
    )
}