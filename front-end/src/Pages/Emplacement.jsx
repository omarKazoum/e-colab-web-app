import Header from "../Components/Emplacement/Header"
import DateSpace from "../Components/Emplacement/DateSpace"
import WorkSpace from "../Components/Emplacement/WorkSpace"
import RightSideBar from '../Components/Planning/MembersComp'
export default function Emplacement() {
    return(
        <main className='bg-blue-page h-screen md:flex '>
            <div className="flex-1 ">

        <Header/>
        
        <DateSpace/>
        <WorkSpace/>
        </div>
        <div className="w-1/5">


        <RightSideBar/>
            </div>
        </main>
    )
}