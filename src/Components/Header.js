import { Link } from 'react-router-dom';
import Menu from './Menu';

import {useContext} from 'react'


const Header=()=>{
    


    return(
 
    <div className="flex items-center  bg-black text-white justify-between px-4 sm:px-7 p-1  shadow-lg " >
    
    <div className="  ">
     <Link to='/' > <img className=" h-12 w-20 sm:h-16 sm:w-24 rounded-full" src=' ShowLogo.png ' />
     </Link>
   </div>

    <Menu/>
    
    </div>

 
    )
}
export default Header;