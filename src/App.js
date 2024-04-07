import './App.css';
import Header from './Components/Header'
import Body from './Components/Body';
import {createBrowserRouter, Outlet} from 'react-router-dom'

import MovieData from './Components/MovieData';

import Footer from './Components/Footer';




const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children: [
        {
          path:'/',
          element:<Body />
        },
        {
          path:'/movieData/:movieId',
          element:<MovieData/>
        },
        
      ]
    }
  ]
)

function App() {
 
  return (
    <div className =" bg-gradient-to-t text-white from-[#3b3b3d] to-gray-400 ">
  
      <Header />
      <Outlet />
       <Footer/>

    </div>
  );
}

export default App;
export {router};
