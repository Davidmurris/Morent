import CarCard from "./CarCard";


function PopularCars() {
    function handleRent(){
        console.log('Car rental button clicked!');
    }

    const cars = [
        {
             name: "Koenigsegg",
             price: "$99.00",
             category: "Sport",
             fuel: '90L',
             passengers: '2 People',
             image: "/images/Car.png"
        },

        {
                  name: "Nissan GT-R",
                  price: "$80.00",
                  category: "Sport",
                  fuel: '80L',
                  passengers: '2 People',
                  slash_price: "$100",
                  image:"/images/CAR (2).png"
        },

        {
              name: "Rolls-Royce",
              price: "$96.00",
              category: "Sedan",
              fuel: '70L',
              passengers: '4 People',
              image: "/images/P2.png"
        },

           {
              name: "Nissan GT-R",
              price: "$80.00",
              category: "Sport",
              fuel: '80L',
              passengers: '2 People',
              slash_price: "$100",
              image: "/images/P1.png"
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
                )
           })


    return (
        <section className="popular-cars grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 md:p-6 max-w-7xl mx-auto">
            {/* popular car header */}
            <div className="flex justify-between items-center col-span-full">
            <h2 className="text-sm font-medium text-slate-400">Popular Car</h2>
            <span className="text-blue-600 hover:text-blue-700 cursor-pointer">View All</span>
            </div>

            {/* popular car cards */}
          

              {carsElements}

            
        </section>
    );
}

export default PopularCars;