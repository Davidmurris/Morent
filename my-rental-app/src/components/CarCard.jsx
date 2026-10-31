import { useState } from "react";
import { Fuel, Settings2, Users} from "lucide-react";

function CarCard(props){
    const [favorite, setfavorite]= useState(false)
    return (
         <div className="Recommended-car-card bg-white rounded-xl p-4 shadow-sm ">
                {/* car img */}
                <div className="flex items-center justify-between">

                <h3 className=" text-lg font-bold text-gray-800 mb-1">{props.name}</h3>
                <span onClick={() => setfavorite(!favorite)} className={`text-xl ${favorite ? "text-red-500" : "text-slate-400"} cursor-pointer`}> {favorite ? '♥' : '♡'}</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">{props.category}</p>
                <img src={props.image} alt={props.name} className="w-full max-w-[90%] h-32 object-contain rounded-lg mb-4 mx-auto block" />

                {/* car details */}
                <div className="flex justify-between items-center text-sm text-gray-400 mb-6 flex-wrap gap-y-2">
                   <span className="flex items-center gap-1">
                        <Fuel size={18} />
                              {props.fuel}
                   </span>
                     <span className="flex items-center gap-1">
                        <Settings2 size={18} />
                        Manual
                     </span>
                      <span className="flex items-center gap-1">
                        <Users size={18} />
                        {props.passengers}
                      </span>
                </div>

                {/* price/button  */}
                <div className="flex justify-between items-center">
                    <div>
                    <div className="flex items-baseline gap-1">  
                        {/* price */}
                    <p className="text-lg font-bold text-gray-800">{props.price}</p>
                    <span className="text-sm font-normal text-gray-400">/day</span>

                    </div>
                    <span className="text-l text-gray-300 line-through">{props.slash_price}</span>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-800 text-white font-normal py-2 px-4 rounded-lg cursor-pointer">
                        Rent Now
                    </button>


                    </div>
            </div>
            

    )

}


export default CarCard;