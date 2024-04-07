import { Link } from "react-router-dom";

const Menu=()=>{


return(
    <div >
      <ul className="flex  font-medium text-sm sm:text-base ">
        <Link to='/'><li className="px-2 hover:text-[#ffdd95]">Home</li></Link>
       <Link to=''> <li className="px-2 hover:text-[#ffdd95]">About</li></Link>
       <Link to=''> <li className="px-2 hover:text-[#ffdd95]">Booking</li></Link>  
       <Link to=''><li className="px-2 hover:text-[#ffdd95]">Contact</li ></Link>
      </ul>
    </div>
)
}
export default Menu;