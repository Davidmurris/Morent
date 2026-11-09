import CarCard from "./CarCard";

function Recommended() {
  function handleRent(){
    console.log('Car rental button clicked!');
  }

   const cars = [
         {
           onRent: {handleRent},
           name:"All New Rush",
           price: "$80.00", 
           category: "SUV",
           fuel: '70L',
           passengers: '6 People',
           slash_price: "$100",
           image:"/images/P3.png",

         } ,

         {
           name:"CR-V", 
           price: "$80.00", 
           category: "SUV",
           fuel: '80L',
           passengers: '6 People',
           image: "/images/P4.png"

         },

         {
            name:"All New Terios", 
           price: "$74.00", 
           category: "SUV",
           fuel: '74L',
           passengers: '6 People',
           image: "/images/P5.png"
           
         },

         {
            name:"CR-V" ,
           price: "$80.00" ,
           category: "SUV",
           fuel: '74L',
           passengers: '6 People',
           image: "/images/P6.png"
         },

         {
          name: " MG ZS Exclusice", 
           price: "$76.00", 
           category: "Hatchback",
           fuel: '70L',
           passengers: '4 People',
           slash_price: "$80",
           image: "/images/P7.png"
         },

         {
           name: "New MG ZS", 
           price: "$80.00", 
           category: "SUV",
           fuel: '80L',
           passengers: '6 People',
           image: "/images/P8.png"
         },

         {
             name: " MG ZS Excite", 
           price: "$74.00", 
           category: "Hatchback",
           fuel: '90L',
           passengers: '4 People',
           slash_price: "$80",
           image: "/images/P7.png"
         },

         {
           name: "New MG ZS", 
           price: "$80.00", 
           category: "SUV",
           fuel: '80L',
           passengers: '6 People',
           image: "/images/P9.png"
         }
           
            ]

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