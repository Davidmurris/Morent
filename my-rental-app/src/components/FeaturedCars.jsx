function FeaturedCars(){
    const heading = "The best platform for car Rental"

    function handleClick(carName) {
        console.log(carName)
    }


    return (
        <div className="featured-cars grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 max-w-7xl mx-auto">

            <div className="featured-car-card bg-[#54A0F7] rounded-xl p-6 text-white relative overflow-hidden flex flex-col min-h-[300px] md:min-h-[300px] ">
               
                 
                 <h2 className="text-2xl font-bold mb-3">{heading}</h2>
                 <p className="text-sm text-white/90 mb-5">Ease of doing a car rental safely and <br /> reliably, of course at a low price.</p>
                 <button onClick={ () => handleClick("toyota camry")} className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold cursor-pointer self-start w-fit ">Rental car</button>
                 <img src="/images/Car.png" alt="" className="w-full max-w-sm mx-auto mt-auto object-contain" />

            </div>

            <div className="featured-car-card bg-[#095FC2] rounded-xl p-6 text-white relative overflow-hidden flex flex-col min-h-[300px] md:min-h-[300px] ">

                <h2 className="text-2xl font-bold mb-3">Easy way to rent a <br /> car at a low price</h2>
                <p className="text-sm text-white/90 mb-5">providing cheap car rental services <br /> and safe and confortable facilities</p>
                <button  onClick={handleClick} className="bg-blue-400 text-white px-5 py-2 rounded-lg font-semibold cursor-pointer self-start w-fit ">Rental Car</button>
                <img src="/images/CAR (2).png" alt="" className="w-full max-w-sm mx-auto mt-auto object-contain" />
            </div>
            
            
        </div>

    );
}

export default FeaturedCars;