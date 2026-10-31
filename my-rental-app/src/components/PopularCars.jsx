import { Fuel, Settings2, Users} from "lucide-react";

function PopularCars() {
    return (
        <section className="popular-cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 max-w-7xl mx-auto">
            {/* popular car header */}
            <div className="flex justify-between items-center col-span-full">
            <h2 className="text-sm font-medium text-slate-400">Popular Car</h2>
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer">View All</span>
            </div>

            {/* popular car cards */}
            <div className="popular-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">Koenigsegg</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">Sport</p>
                <img src="/images/Car.png" alt="Koenigsegg" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

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
                        2 People
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$99.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                </div>
                
            </div>



            {/* popular car cards */}

            <div className="popular-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">Nissan GT-R</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">Sport</p>
                <img src="/images/P1.png" alt="Nissan GT-R" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 ">
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
                        2 People
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


                {/* popular car cards */}
                <div className="popular-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">Rolls-Royce</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">Sedan</p>
                <img src="/images/P2.png" alt="Rolls-Royce" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 ">
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
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">$96.00</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                </div>

            </div>


            
            {/* popular-car-card */}


            <div className="popular-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">Nissan GT-R</h3>
                <span className="text-xl text-slate-400 cursor-pointer">♡</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">Sport</p>
                <img src="/images/P1.png" alt="Nissan GT-R" className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 ">
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
                        2 People
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
        </section>
    );
}

export default PopularCars;