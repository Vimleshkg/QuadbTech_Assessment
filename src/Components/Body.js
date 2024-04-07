import {useState, useEffect, createContext} from 'react'
import { Card } from './Card';
import ShimerUI from './ShimerUI';
import { Link } from 'react-router-dom';





const Body=()=>{
     
    
     const [filterMovies, setFilterMovies]= useState();
     const [originalMovies, setOriginalMovies] = useState();
     const [searchText, setSearchText]= useState(""); 


 
   function getMovie(){
      const filter = originalMovies.filter((movie)=>{
        return movie?.show?.name?.toLowerCase()?.includes(searchText.toLowerCase());
      }) 
      setFilterMovies(filter);      
   }

   function handleChange(e){
    setSearchText(e.target.value)
    if(filterMovies.length <=2)
    {
        setFilterMovies(originalMovies)
    }
   }

    useEffect(()=>{
        getData();     
    },[]);

    const getData=async()=>{
        
        const data= await fetch("https://api.tvmaze.com/search/shows?q=all");
        const jsonData= await data.json();
       setFilterMovies(jsonData);
       setOriginalMovies(jsonData);
       console.log(jsonData);
       }
    
    

    return (!filterMovies) ? <ShimerUI/> :
    (
    <> 
      <div className='flex justify-center pt-4  '>
         <div className=' shadow-lg w-2/3 sm:w-1/3 flex'>
        <input type="text" className='ml-2 w-full pl-4 h-8 text-black' value={searchText} placeholder='Search' onChange={handleChange}/>
        <button className='bg-black w-14 h-8 p-1 text-sm text-white rounded-sm' onClick={getMovie}>Search</button>
        </div>
        </div> 
       {
       filterMovies=="" ? <h1 className='p-28 flex justify-center' >Movies Not found</h1> : 
        <div className='flex justify-center flex-wrap mt-2 mb-16'>
        {
            filterMovies.map((movie)=>{
             return  <Link to={'/movieData/'+movie?.show?.id }> <Card key={movie?.show?.id} show={movie?.show} /> </Link>

            })
        } 
       </div>   
    }
        </>
    )
}
export default Body;