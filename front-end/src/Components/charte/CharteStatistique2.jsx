import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title ,Tooltip, LineElement,Legend ,CategoryScale ,LinearScale ,PointElement} from 'chart.js';
import { useState } from 'react';
ChartJS.register(
    Title ,Tooltip, LineElement,Legend,CategoryScale,LinearScale,PointElement
)
export default function CharteStatistique2() {
    const [data, setData]=useState({
        labels:["1","2","3","4","5","6","7","8","9","10"],
        datasets:[
            {
                label:"Fdataset",
                data:[12, 5, 26, 23, 1,0,27,28,29,26,25,42,23,26,29],
                backgroundColor:'gray',
                borderColor:'blue',
                tension:'0.4',
                pointStyle:'rect'
            }
            
        ]
    },
    )
    const mystyle = {
      width: "8px",
      height: "8px",
    };
    return(
        <div className='w-1/2  px-5 py-2'>
            <h1 className='text-xl px-6'>taux d'occupation ce mois</h1>
            <Line data={data} style={mystyle}>Hello</Line>
        </div>
    )
}