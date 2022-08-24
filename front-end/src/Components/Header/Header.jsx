import {React,useContext } from 'react'
import {UserDataContext} from "../../App";

const Header=()=> {
        let {connectedUserData}=useContext(UserDataContext);

      return (<div className='px-10'>
        <h2 className="ml-5 text-grey-font font-semibold text-2xl my-4">Bonjour, {connectedUserData!=null?connectedUserData.user.first_name:'---'}</h2>
        <h1 className="ml-5 text-grey-big font-extrabold text-2xl">Bienvenue à E-Collab, Cegedim</h1>
    </div>);
    
  }
  export default Header;
