import './App.css'
import Navbar from './components/Navbar';
import FeaturedCars from './components/FeaturedCars';
import RentalOptions from './components/RentalOptions';
import PopularCars from './components/PopularCars';
import Recommended from './components/Recommended';
import Footer from './components/Footer';
import { useEffect, useState} from 'react';

function App() {
  useEffect(() => {
    document.title = "MORENT | Car Rental";
  } , []);

  const [count, setCount] = useState(0);

 

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <Navbar />
      <FeaturedCars />
      <RentalOptions />
      <PopularCars />
      <Recommended />
      <Footer />
      
    </div>
     
    
      

  )
}

export default App
