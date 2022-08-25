import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import PieChart from './chart.jsx'
import { useState } from "react";
import { useEffect, useContext } from "react";
import { UserDataContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header.jsx';


export default function Home() {
  //TODO:: continue this // send request to backen dand hide button after that
  const signallerSaPresence = (token) => {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({

    });
    var config = {
      method: 'get',
      url: 'http://127.0.0.1:8000/api/signalerPresence',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        userData.is_present = true;
        setUserData(userData)

      })
      .catch(function (error) {
        console.log(error);
      });

  }


  let { connectedUserData } = useContext(UserDataContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (connectedUserData == null)
      navigate("/login")
    return
  })

  let [userData, setUserData] = useState(null);
  useEffect(() => {
    var axios = require('axios');
    var qs = require('qs');
    var data = '';
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/profile/',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + connectedUserData.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };
    axios(config)
      .then(function (response) {
        let data = response.data[0];
        data.is_present = response.data.is_present;
        setUserData(data)
        console.log(data)

      })
      .catch(function (error) {
        console.log('from backend', error);
        setUserData(null)
      });

  }, []);
  return (
    <section className="width-screen" >
        <div className=" md:flex">
        <div className="bg-blue-page sm:w-full h-screen lg:w-10/12">
          <Header />
            <div className="bg-gradient-to-r rounded-xl from-blue-principale relative to-blue-grad mx-auto w-11/12 h-max mt-5">
              <div className="text-center  text-white flex justify-between  lg:flex-row lg:h-full">
                <div className="w-1/2 flex items-center">
                  <img className=" w-1/2 mx-6  justify-center rounded-full " src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" />
              </div>
                <div className="flex flex-col my-10 px-10 items-start  w-2/4 py-10 ">
  
                  {/* <Typography variant="h4" color="black" className="mb-6 font-sans text-4xl"> */}
                  <h4 className="mb-6 font-sans text-4xl">
                  {userData != null ? userData.first_name + ' ' + userData.last_name : '---'}
                  </h4>
  
                  {/* </Typography> */}
                  <div className="  space-y-4">
  
  
                <div className="flex">
                  <Icon icon="ant-design:mail-outlined" width={25} />
                  <p> {userData != null ? userData.email : '---'}</p>
                </div>
                <div className="flex">

                </div>
                <div className="flex">
                  <Icon icon="gg:work-alt" width="25" />
                  <p>{userData != null ? userData.job_type.label : '---'}</p>
                </div>
                <div className="flex">
                  <Icon icon="akar-icons:people-group" width="25" />
                  <p>{userData != null ? userData.role.label : '---'}</p>
                </div>
              </div>
                </div>
                <div className="w-2/4 flex items-center">
                {(userData==null||userData.is_present.id==1)&&<button onClick={()=>{
                signallerSaPresence(connectedUserData.token);
            }} className="bg-blue-dark text-white  rounded-xl py-1  w-11/12 h-16 ">Signalez Ma présence</button> }
            </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 ">
            <div className="flex justify-around my-5 h-[10%] w-full">
              <button className="bg-pink-hot text-2xl justify-center  text-white flex py-7 rounded-md w-5/12 ">
                <Icon icon="gridicons:create" width="2rem" style={{ 'marginRight': '10px' }} />
              Crée une nouvelle demande
            </button>
              <button className="flex bg-white text-2xl justify-center p-7 text-blue-side rounded-md w-5/12 ">
                <Icon icon="akar-icons:calendar" width="2rem" style={{ 'marginRight': '10px' }} />
              Consulter le planing
            </button>
          </div>
  
            <div className="flex justify-around w-full">
              <div className="pb-8 bg-white  text-2xl w-5/12  rounded-lg">
                <div className="flex flex-col items-center ">
                  <h3 className="font-bold text-grey-big py-10">Mes demandes</h3>
                  <ul className="flex flex-col space-y-5 ">
                    <li className="">
                      <span className="w-10/12"> Demandes en Cours</span>
                    <span className="mx-5 border-2 border-blue-side px-2 text-blue-principale rounded-lg">3</span>
                  </li>
                    <li className="">
                      <span className="w-10/12"> Demandes Refusées</span>
                    <span className="mx-5 border-2 border-blue-side px-2 text-pink-hot rounded-lg">2</span>
                  </li>
                    <li>
                      <span className="w-10/12">Demande Acceptées</span> 
                    <span className="mx-5 border-2 border-blue-side px-2 text-green-hot rounded-lg">7</span>
                  </li>
                </ul>
                </div>
              </div>
              <div className="w-5/12 bg-white  text-2xl rounded-lg">
                <div className=" flex flex-col items-center">
                  <h3 className="font-bold text-grey-big py-1 ">Mes statistique</h3>
                  <PieChart className="justify-center"></PieChart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/5 sm:w-full lg:h-screen sm:h-full  bg-blue-quarter">
            <div className="mx-4 my-10 rounded-lg bg-white">
              <div className=" h-max">
                <h2 className="text-center  py-4  text-grey-font font-bold text-xl">Cette semaine</h2>
              <hr />
                <div className="p-4">
                <ul className="flex justify-between mt-2">
                <li className="font-semibold">Lun</li>
                <li className="font-semibold">Mar</li>
                <li className="font-semibold">Mer</li>
                <li className="font-semibold">Jeu</li>
                <li className="font-semibold">Ven</li>
                <li className="font-semibold">Sam</li>
                <li className="font-semibold">Dim</li>
              </ul>
                <ul className="flex justify-between mt-2">
                <li className="bg-blue-principale px-2 font-bold">T</li>
                  <li className="font-bold">P</li>
                  <li className=" font-bold">P</li>
                  <li className=" font-bold">P</li>
                  <li className=" font-bold">T</li>
                  <li className=" font-bold">-</li>
                  <li className=" font-bold">-</li>
              </ul>
                </div>
              </div>
            </div>
          <Card className="mt-4 mb-5 mx-4 pb-5">
            <CardBody>
              <h3 className="text-center pb-3 font-bold text-grey-big text-xl">Mon équipe</h3>
              <hr />
              <ul>
                <li className="flex py-5 font-medium text-grey-font">
                  <div className="w-3 h-3 bg-red-hot rounded-full mt-2 mr-4"> </div>
                  <p>Badreddine Abourial</p>
                </li>
                <li className="flex font-medium text-grey-font">
                  <div className="w-3 h-3 bg-red-hot rounded-full mt-2 mr-4"> </div>
                  <p>Wanir Mohammed</p>
                </li>
                <li className="flex py-5 font-medium text-grey-font">
                  <div className="w-3 h-3 bg-green-hot rounded-full mt-2 mr-4"> </div>
                  <p>Ibrahim benjarmoune</p>
                </li>
                <li className="flex font-medium text-grey-font">
                  <div className="w-3 h-3 bg-red-hot rounded-full mt-2 mr-4"> </div>
                  <p>Wassim Lahlali</p>
                </li>
                <li className="flex py-5 font-medium text-grey-font">
                  <div className="w-3 h-3 bg-green-hot rounded-full mt-2 mr-4"> </div>
                  <p>Safae Balha</p>
                </li>
                <li className="flex font-medium text-grey-font">
                  <div className="w-3 h-3 bg-green-hot rounded-full mt-2 mr-4"> </div>
                  <p>Omar kazoum</p>
                </li>
              </ul>
            </CardBody>
          </Card>
          <Card className="mx-4 mb-5">
            <CardBody>
              <p className=" font-medium text-grey-font">les jours restant en télétravail: <strong className="text-pink-hot">9</strong></p>
            </CardBody>
          </Card>
          <Card className="mx-4 mb-5">
            <CardBody>
              <p className=" font-medium text-grey-font">le nombre de jours en abscence: <strong className="text-pink-hot">9</strong></p>
            </CardBody>
          </Card>
        </div>
      </div>

    </section>
  );
}
  