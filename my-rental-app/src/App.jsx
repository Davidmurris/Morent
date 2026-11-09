import './App.css'
import Navbar from './components/Navbar';
import FeaturedCars from './components/FeaturedCars';
import RentalOptions from './components/RentalOptions';
import PopularCars from './components/PopularCars';
import Recommended from './components/Recommended';
import Footer from './components/Footer';
import { useEffect} from 'react';

function App() {
  useEffect(() => {
    document.title = "MORENT | Car Rental";
  } , []);

 

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
