import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerUI from './ShimerUI';
import TicketBooking from './TicketBooking';

const MovieData = () => {
  const [movieList, setMovieList] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const [ isBooking, setIsBooking]= useState(false)

  function handleBookTicket(e){
    setIsBooking(true)
   }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const jsonData = await data.json();
        setMovieList(jsonData);
        const filtered = jsonData.find((movie) => movie?.show?.id === parseInt(movieId));
        setMovieDetails(filtered?.show);
      } catch (e) {
        console.log(e);
      }
    };

    getData();

  }, [movieId]);

  if (!movieDetails) {
    return <ShimmerUI />;
  }

  return (
    <div className= {'pt-16 relative w-full h-screen bg-gradient-to-t text-white from-[#3b3b3d] to-gray-400'}>
    <div className={'grid grid-cols-12 p-8 '+ (isBooking && 'blur-lg') }>
      <div className="w-full col-span-3 sm:ml-16">
        <img className="w-56" src={movieDetails?.image?.medium} alt={movieDetails?.name} />
      </div>

      <div className='sm:ml-16 col-span-9 ml-4'>
        <h2 className="font-bold my-2 text-white text-3xl sm:text-4xl">{movieDetails?.name}</h2>
        <p className="sm:text-lg my-1 ">{movieDetails?.network?.country?.code} | {movieDetails?.language} | {movieDetails?.runtime}min</p>
        <p className="sm:text-lg my-1">{movieDetails?.genres.map((data) => <span>{data} </span>)}</p>

        <button onClick={handleBookTicket} className='bg-[#ffdd95] font-bold my-3 text-black p-2  px-3 sm:px-6 rounded-3xl shadow-sm'>
          Book Ticket
        </button>

        <div className='sm:w-[40%] mt-5'>
          <p dangerouslySetInnerHTML={{ __html: movieDetails?.summary }} ></p>
        </div>
      </div>

   
    </div>
  
    
    {
    isBooking ?
      <div className='mx-8 sm:w-[40%] sm:left-[30%] absolute top-0 sm:top-10'>
        <div className='flex justify-center sm:mt-0 mt-2 '> <h1 onClick={()=>setIsBooking(false)} className='bg-black cursor-pointer px-2 rounded-sm  '> X </h1> </div>
        <TicketBooking movieName={movieDetails?.name}  />
      </div>
      :
      ''
      }

    </div>
  
  );
}

export default MovieData;
