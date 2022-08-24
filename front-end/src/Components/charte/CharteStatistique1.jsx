// import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title ,Tooltip, LineElement,Legend ,CategoryScale ,LinearScale ,PointElement} from 'chart.js';
import {useContext, useEffect, useState} from 'react';
import {UserDataContext} from "../../App";
import axios from "axios";
ChartJS.register(
    Title ,Tooltip, LineElement,Legend,CategoryScale,LinearScale,PointElement
)
export default function CharteStatistique1() {


    let emptyData=
        {
            labels:[],
            datasets:[
                {
                    label:"loading",
                    data:[],   //:{ $nbrPresence}
                    backgroundColor:'gray',
                    borderColor:'blue',
                    tension:'0.4',
                    pointStyle:'rect'
                }
            ]
        }


    let {connectedUserData}=useContext(UserDataContext);

    let [data, setData]=useState(emptyData);
    //loading presence data from backend on start
    useEffect(()=>{
        let config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/statistiques/chartMethode',
            headers: {
                'Authorization': 'Bearer '+connectedUserData.token
            }
        };

        axios(config)
            .then(function (response) {
                ///refactoring data
                let presenceDataFromServer=response.data.taux_de_presence
                let presenceDataReady={
                    labels:[],
                    datasets:[
                    {
                        label:"Taux de présence pour "+new Date().toLocaleString('fr-fr', { month: 'long' }),
                        data:[],
                        backgroundColor:'gray',
                        borderColor:'blue',
                        tension:'0.4',
                        pointStyle:'rect'
                    }
                ]}
                presenceDataReady.labels=Object.keys(presenceDataFromServer);
                presenceDataReady.datasets[0].data=Object.values(presenceDataFromServer)
                console.log('presence data from back-end',presenceDataReady);
                setData(presenceDataReady)
            })
            .catch(function (error) {
                console.log(error);
            });

    },[connectedUserData])


    return(
        <div className='bg-white h-full  rounded-lg px-6 py-2'>
            <h1 className='text-xl px-6'>taux de presence ce mois</h1>
            <Line data={data} options={{
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }} >Hello</Line>
        </div>
    )
}