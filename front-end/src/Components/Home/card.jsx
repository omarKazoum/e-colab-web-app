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

  export default function Home() {
    return (
      <section className="width-screen" >
    <div className="flex sm:flex-col md:flex-row">
      <div className="bg-blue-page sm:w-full lg:w-10/12">
      <Card className="bg-gradient-to-r from-blue-principale to-blue-grad mx-5 w-10/12 h-2/6 mt-5">
        <CardBody className="text-center text-white flex sm:flex-col lg:flex-row lg:h-full">
          <div className="w-2/6">
            <div className="w-24 h-24 bg-black rounded-full "></div>
          </div>  
         <div className="flex flex-col justify-items-center items-center w-2/6">  
         <Typography variant="h4" color="black" className="mb-2 font-sans">
                First name LastName
              </Typography>
          <div className="flex">
            <Icon icon="ant-design:mail-outlined" width={25} />
            <p>email@email.com</p>
          </div>
          <div className="flex">
            <Icon icon="ant-design:phone-outlined" width="25" />
            <p>+2124884885</p>
          </div>
          <div className="flex">
            <Icon icon="gg:work-alt" width="25" />
            <p>Stagiaire</p>
          </div>
          <div className="flex">
            <Icon icon="akar-icons:people-group" width="25" />
            <p>E-Business</p>
          </div>
          </div>
          <button className="bg-blue-dark text-white px-3 rounded py-1 float-right h-10  w-2/6">Signalez Ma présence</button>
        </CardBody>
      </Card> 

      <div className="flex gap-x-5 m-5">
        <button className="bg-pink-hot text-white flex p-5 rounded-md">
        <Icon icon="gridicons:create" width="25" style={{'marginRight': '10px'}} />
        Crée une nouvelle demande
        </button>
        <button className="flex bg-white text-blue-side p-5 rounded-md">
        <Icon icon="akar-icons:calendar" width="25" style={{'marginRight': '10px'}}/>
        Consulter le planing
        </button>
      </div>
      <div className="flex gap-x-5 w-full">
        <Card className="pb-5 ml-5 w-5/12">
          <CardBody className="flex flex-col items-center ">
          <h3 className="font-bold text-grey-big text-xl">Mes demandes</h3>
          <ul className="">
            <li className="mt-5">Demandes en Cours
              <span className="mx-5 border-2 border-blue-side px-2 text-blue-principale rounded-lg">3</span>
            </li>
            <li className="my-4">Demandes Refusées
              <span className="mx-5 border-2 border-blue-side px-2 text-pink-hot rounded-lg">2</span>
            </li>
            <li>Demande Acceptées
              <span className="mx-5 border-2 border-blue-side px-2 text-green-hot rounded-lg">7</span>
            </li>
          </ul>
          </CardBody>
        </Card>
        <Card className="w-5/12">
          <CardBody className=" flex flex-col items-center">
          <h3 className="font-bold text-grey-big text-xl">Mes statistique</h3>
          <PieChart className=""></PieChart>
          </CardBody>
        </Card>
      </div>
      </div>     
      <div className="lg:w-1/5 sm:w-full lg:h-screen sm:h-full  bg-blue-quarter">
      <Card className="mx-4 my-5">
            <CardBody>
              <h2 className="text-center pb-3 text-grey-font font-bold text-xl">Cette semaine</h2>
              <hr />
              <ul className="flex gap-x-3 mt-2">
                <li className="font-semibold">Lun</li>
                <li className="font-semibold">Mar</li>
                <li className="font-semibold">Mer</li>
                <li className="font-semibold">Jeu</li>
                <li className="font-semibold">Ven</li>
                <li className="font-semibold">Sam</li>
                <li className="font-semibold">Dim</li>
              </ul>
              <ul className="flex gap-x-3 mt-2">
                <li className="bg-blue-principale px-2 font-bold">T</li>
                <li className="px-2 font-bold">P</li>
                <li className="px-3 font-bold">P</li>
                <li className="px-2 font-bold">P</li>
                <li className="px-2 font-bold">T</li>
                <li className="px-3 font-bold">-</li>
                <li className="px-3 font-bold">-</li>
              </ul>
            </CardBody>
          </Card>
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
