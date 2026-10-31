import { Fuel, Settings2, Users} from "lucide-react";

function Recommended() {
    return (
        <section className="popular-cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 max-w-7xl mx-auto ">
            {/* popular car header */}
            <div className="flex justify-between items-center col-span-full">
            <h2 className="text-sm font-medium text-slate-400">Recommendation car</h2>
            </div>

            
            {/* recommendation car cards */}

            <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">All New Rush</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">SUV</p>
                <img src="/images/P3.png" alt="All New Rush" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              70L
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        6 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div>
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$80.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>

                    </div>
                    <span className="text-l text-gray-300 line-through">$100.00</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                    </div>
            </div>


             {/* Recommended car cards */}
            <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">CR-V</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">SUV</p>
                <img src="/images/P4.png" alt="CR-V" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              80L
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        6 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$80.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                </div>
                
            </div>

            {/* Recommended car cards */}

            <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">All New Terios</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">SUV</p>
                <img src="/images/P5.png" alt="All New Terios" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              90L
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        6 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$74.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                </div>
                
            </div>


            {/* Recommended car cards */}
            <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">CR-V</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">SUV</p>
                <img src="/images/P6.png" alt="CR-V" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              80L
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        6 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$80.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                </div>
                
            </div>


             {/* recommendation car cards */}

            <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">MG ZX Exclusice</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">Hatchback</p>
                <img src="/images/P7.png" alt="MG ZX Exclusice" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              70L
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        4 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div>
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$76.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>

                    </div>
                    <span className="text-l text-gray-300 line-through">$80.00</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                    </div>
            </div>


            {/* Recommended car cards */}
            <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">New MG ZS</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">SUV</p>
                <img src="/images/P8.png" alt="New MG ZS" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              80L
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        6 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$80.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                </div>
                
            </div>

            {/* Recommended car cards */}

            <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">MG ZX Excite</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">Hatchback</p>
                <img src="/images/P7.png" alt="MG ZX Excite" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              74L
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        4 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$74.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                </div>
                
            </div>


           
            {/* Recommended car cards */}
            <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">New MG ZS</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">SUV</p>
                <img src="/images/P9.png" alt="New MG ZS" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              80L
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        6 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex flex-wrap gap-3 justify-between items-center">
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$80.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                </div>
                
            </div>


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