import Header from "../Components/Emplacement/Header"
import DateSpace from "../Components/Emplacement/DateSpace"
import WorkSpace from "../Components/Emplacement/WorkSpace"
import RightSideBar from '../Components/Planning/MembersComp'
import axios from 'axios';
import {createContext, useEffect, useState} from "react";
import {useContext} from "react";
import {UserDataContext} from "../App";
function dateToFormat(date,format){
    let month = date.getUTCMonth() + 1; //months from 1-12
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    if(day.toString().length==1)
        day="0"+day;
    if(month.toString().length==1)
        month="0"+month;

    format=format.replaceAll('d',day+'')
    format=format.replaceAll('y',year+'')
    format=format.replaceAll('m',month+'')
    console.log(day.toString().length)


    return  format;

}

export default function Emplacement() {
    //use satae to hold the open space data from the server for the date selected
    let [openSpaceData,setOpenSpaceData]=useState(null);
    let [date,setDate]=useState(new Date());

    let {connectedUserData}=useContext(UserDataContext);

    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:8000/api/manager/planning/openSpaces/default/'+dateToFormat(date,'y-m-d'),
            headers: {
                'Authorization': 'Bearer '+connectedUserData.token
            }
        };

        axios(config)
            .then(function (response) {
                //print the data from the server to the console to see it's structure
                console.log(response.data);
                //update open space data state
                setOpenSpaceData(response.data);
            })
            .catch(function (error) {
                //if an error happens in the request we print it to the console
                console.log(error);
            });


    },[date])


    return(
        <main className='bg-blue-page h-screen md:flex '>
            <div className="flex-1 ">

                <Header/>

                <DateSpace openspaceName={openSpaceData!=null?openSpaceData.open_space.label:'---' } date={dateToFormat(date,'y-m-d')} setDate={setDate}/>
                <WorkSpace data={openSpaceData}/>
                </div>
                <div className="w-1/5">
                <RightSideBar/>
                    </div>
        </main>
    )
}