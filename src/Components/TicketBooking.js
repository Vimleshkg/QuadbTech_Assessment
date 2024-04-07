import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketBooking = ({ movieName }) => {
    const [formData, setFormData] = useState({
        movie: movieName,
        date: "",
        time: "",
        email: "",
        firstname: "",
        lastname: ""
    });

    const navigate = useNavigate();

    function handleAuth(e) {
        e.preventDefault();

        // Check if all fields are not empty
        const { movie, date, time, email, firstname, lastname } = formData;
        if (!movie || !date || !time || !email || !firstname || !lastname) {
            window.alert('Please fill in all fields');
            return;
        }
        sessionStorage.setItem('bookingData',formData)
        window.alert('Ticket Booked Successfully');
        navigate('/')
    }

    function inputChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className='flex justify-center'>
            
            <form className='  mt-2 flex flex-col w-full max-w-lg'>
                <div className='my-2'>
                    <div className='flex flex-col w-full'>
                        <label className='font-bold sm:text-lg'>Movie</label>
                        <input onChange={inputChange} value={movieName} name="movie" className='p-2 pl-4 rounded-lg bg-gray-100 text-black shadow-sm' type="text" />
                    </div>
                </div>
                <div className='my-3 flex flex-col sm:flex-row'>
                    <div className='flex flex-col w-full mr-0 sm:mr-4'>
                        <label className='font-bold sm:text-lg'>Date</label>
                        <input onChange={inputChange} name="date" className='p-2 pl-4 rounded-lg bg-gray-100 shadow-sm text-black' type="date" placeholder='DD/MM/YYYY' required />
                    </div>
                    <div className='flex flex-col w-full mt-4 sm:mt-0'>
                        <label className='font-bold sm:text-lg'>Time</label>
                        <input onChange={inputChange} name="time" className='p-2 pl-4 rounded-lg bg-gray-100 shadow-sm text-black' type="time" placeholder='' required />
                    </div>
                </div>
                <div className='flex flex-col w-full my-3'>
                    <label className='font-bold sm:text-lg'>Email</label>
                    <input onChange={inputChange} name="email" className='p-2 pl-4 rounded-lg bg-gray-100 shadow-sm text-black' type="email" placeholder='' required />
                </div>
                <div className='my-3 flex flex-col sm:flex-row'>
                    <div className='flex flex-col w-full mr-0 sm:mr-4'>
                        <label className='font-bold sm:text-lg'>Firstname</label>
                        <input onChange={inputChange} name="firstname" className='p-2 pl-4 rounded-lg bg-gray-100 shadow-sm text-black' type="text" placeholder='First Name' required />
                    </div>
                    <div className='flex flex-col w-full mt-4 sm:mt-0'>
                        <label className='font-bold sm:text-lg'>Lastname</label>
                        <input onChange={inputChange} name="lastname" className='p-2 pl-4 rounded-lg bg-gray-100 shadow-sm text-black' type="text" placeholder='Last Name' required />
                    </div>
                </div>
                <div className='flex mb-2 text-white'>
                    <input id="checkbox" className='h-3 w-3 sm:w-4 sm:h-4' type='checkbox' required />
                    <label htmlFor="checkbox" className='text-sm sm:text-base font-medium ml-3'>
                        Booking ticket means you're okay with our
                        <span className='text-purple-700'> Terms of Service</span>,
                        <span className='text-purple-700'> Privacy Policy</span>,
                        and our default <span className='text-purple-700'>Notification Settings</span>
                    </label>
                </div>
                <button onClick={handleAuth} className='p-2 border-0 my-7 px-5 sm:px-10 font-medium text-white rounded-lg bg-pink-600'> Book Now</button>
            </form>
        </div>
    );
}

export default TicketBooking;
