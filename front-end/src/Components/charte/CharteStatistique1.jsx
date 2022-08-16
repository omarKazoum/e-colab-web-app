// import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title ,Tooltip, LineElement,Legend ,CategoryScale ,LinearScale ,PointElement} from 'chart.js';
import { useState } from 'react';
ChartJS.register(
    Title ,Tooltip, LineElement,Legend,CategoryScale,LinearScale,PointElement
)
export default function CharteStatistique1() {
    const [data, setData]=useState({
        labels:["a","b","c","d","e"],
        datasets:[
            {
                label:"Fdataset",
                data:[12, 5, 26, 23, 1],
                backgroundColor:'gray',
                borderColor:'gray',
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
        <div className='w-30'>
            <Line data={data} style={mystyle}>Hello</Line>
        </div>
    )
}