import { footerData } from "./utils/Constant";
const Footer = () => {

    return  (  
      <div className='bg-gray-200  text-sm sm:text-base'>
    <div className='pt-6 grid grid-cols-12'>
      <div className='col-span-4 lg:col-span-3 flex flex-col pr-6 ml-4 lg:ml-16 '>
        <img className='w-28' src="ShowLogo.png" alt="Logo" />
        <h1 className=' font-medium hover:text-black text-gray-500'> Shows is the world's leading community for providing content of  Entertainment to share
        </h1>
        <div className='flex my-6'>
         
        </div>
      </div>
      <div className='col-span-8 lg:col-span-9 mt-11 text-gray-500 flex justify-evenly font-medium'>
        <ul>
          <h1 className='font-bold text-black '> For Shows</h1>
          {footerData.ForDesigners.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
        </ul>
        <ul>
          <h1 className='font-bold text-black'> Hire Creators</h1>
          {footerData.HireDesigners.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
        </ul>
        <ul className='hidden sm:block'>
          <h1 className='font-bold text-black'> Company</h1>
          {footerData.Company.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
        </ul>
        <ul className='hidden md:block'>
          <h1 className='font-bold text-black'> Directories</h1>
          {footerData.Directories.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
        </ul>
        <ul className='hidden md:block'>
          <h1 className='font-bold text-black'> Design Resources</h1>
          {footerData.DesignResources.map((data, index) => <li key={index} className='my-2 hover:text-black'> {data} </li>)}
        </ul>
      </div>
    </div>
    <div className='mx-12 py-8 mt-12 border-t-2 text-gray-500 flex justify-between font-medium'>
      <h1> @ 2024 Shows. All rights reserved.</h1>
      <h1 className='sm:flex items-center hidden sm:block'> <span className='text-black mr-1'> 20,501,853 </span> shots   </h1>
    </div>
  </div>
    )
  };


  export default Footer;