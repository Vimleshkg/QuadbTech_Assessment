

export const Card = ({show}) => {


  return (

    <div className=" w-56 h-72 mt-4 flex flex-col   relative overflow-auto bg-white text-black rounded-lg m-3 shadow-lg">
    <div className=' flex justify-center'>
      <img className="  w-56 h-48 bg-coverer " src={show?.image?.medium} />
      </div>

      <div className='pl-2'>
      <h3 className="font-bold  pt-2">{show?.name}</h3>
      <h4 className=" pt-1 font-medium text-gray-600">{ show?.genres?.map((d,i)=> <span key={i}> { d +' ' } </span>) }</h4>
      <h4 className=" pt-1 font-medium text-gray-600">{show?.rating?.average} stars</h4>
          
         
      </div>
    </div>
  )
}
