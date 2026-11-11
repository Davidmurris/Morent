import CarCard from "./CarCard";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

function Recommended() {
  const { data: cars, loading, error } = useFetch(
  "http://localhost:3000/cars"
);

  

  if (loading) {
    return <p>Loading cars...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  function handleRent(){
    console.log('Car rental button clicked!');
  }

   

            const carsElements = cars.map((car, index) => {
              return (
                <CarCard 
                  onRent={handleRent}
                  key={index}
                  name={car.name}
                  price={car.price}
                  category={car.category}
                  fuel={car.fuel}
                  passengers={car.passengers}
                  image={car.image}
                  slash_price={car.slash_price}
                />
              );
            });

   
    
    return (
        <section className="popular-cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 max-w-7xl mx-auto ">
            {/* popular car header */}
            <div className="flex justify-between items-center col-span-full">
            <h2 className="text-sm font-medium text-slate-400">Recommendation car</h2>
            </div>

            
           

           
            {carsElements}
            {/* Recommended car cards */}
           
            {/* Recommended car cards */}

           

            {/* Recommended car cards */}
           
           

             {/* recommendation car cards */}

            
            {/* Recommended car cards */}
          
           
            {/* Recommended car cards */}

           
           


           

             {/* more cars section */}
<div className="relative flex justify-center items-center mt-8 mb-4 col-span-full">

  <button
    type="button"
    className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm cursor-pointer "
  >
    Show more car
  </button>

  <span className="absolute right-0 text-sm text-slate-400">
    120 Car
  </span>

</div>




        </section>

       




        

        

    )
}



export default Recommended;