import CarCard from "./CarCard";

function Recommended() {

   
    
    return (
        <section className="popular-cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 max-w-7xl mx-auto ">
            {/* popular car header */}
            <div className="flex justify-between items-center col-span-full">
            <h2 className="text-sm font-medium text-slate-400">Recommendation car</h2>
            </div>

            
            {/* recommendation car cards */}

           <CarCard 
           name="All New Rush" 
           price= "$80.00" 
           category= "SUV"
           fuel= '70L'
           passengers= '6 People'
           slash_price= "$100"
           image="/images/P3.png"
           />


             {/* Recommended car cards */}
            <CarCard 
           name="CR-V" 
           price= "$80.00" 
           category= "SUV"
           fuel= '80L'
           passengers= '6 People'
           image="/images/P4.png"
           />
            {/* Recommended car cards */}

           <CarCard 
           name="All New Terios" 
           price= "$74.00" 
           category= "SUV"
           fuel= '74L'
           passengers= '6 People'
           image="/images/P5.png"
           />

            {/* Recommended car cards */}
            <CarCard 
           name="CR-V" 
           price= "$80.00" 
           category= "SUV"
           fuel= '74L'
           passengers= '6 People'
           image="/images/P6.png"
           />

             {/* recommendation car cards */}

             <CarCard 
           name=" MG ZS Exclusice" 
           price= "$76.00" 
           category= "Hatchback"
           fuel= '70L'
           passengers= '4 People'
           slash_price= "$80"
           image="/images/P7.png"
           />

            {/* Recommended car cards */}
            <CarCard 
           name="New MG ZS" 
           price= "$80.00" 
           category= "SUV"
           fuel= '80L'
           passengers= '6 People'
           image="/images/P8.png"
           />
            {/* Recommended car cards */}

                 <CarCard 
           name=" MG ZS Excite" 
           price= "$74.00" 
           category= "Hatchback"
           fuel= '90L'
           passengers= '4 People'
           slash_price= "$80"
           image="/images/P7.png"
           />


           
            {/* Recommended car cards */}
              <CarCard 
           name="New MG ZS" 
           price= "$80.00" 
           category= "SUV"
           fuel= '80L'
           passengers= '6 People'
           image="/images/P9.png" />

             {/* Show more cars section */}
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