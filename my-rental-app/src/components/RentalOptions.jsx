function RentalOptions() {
    return (
        <div className="relative">

              {/* swap button */}

            <button
    type="button"
    aria-label="Swap pick-up and drop-off"
    className=" md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md pointer-cursor hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
    ⇅
</button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full p-3 md:p-4">
          

            {/* pick-up option */}
            <div className="flex flex-col gap-4 bg-white p-5 rounded-xl shadow-sm">
                
                <div className="flex items-center gap-2">

                <input type="radio" 
                name="pick-option" 
                id="pick-up"
                 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"/>

                <label htmlFor="pick-up">
                    <h1 className="text-lg font-semibold text-gray-800">Pick-Up</h1>
                    </label>
                </div>
{/* field grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 min-w-0 w-full">

                {/* location input */}
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="pick-location" 
                    className="text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <select 
                    name="pick-location" 
                    id="pick-location" 
                    className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:outline-none sm:text-sm bg-white text-gray-800">
                         <option value="" disabled selected hidden>Select your city</option>
                        <option value="">PORT-HARCOURT</option>
                        <option value="location1">LAGOS</option>
                        <option value="location2">ABUJA</option>
                    </select>
                </div>

                {/* date input */}
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="pick-date" 
                    className="text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <input 
                        type="text"
                        placeholder="Select your date"
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                        name="pick-date" 
                        id="pick-date" 
                        className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:outline-none sm:text-sm bg-white text-gray-800 placeholder-gray-400"
                    />
                     

                </div>    

                {/* time input */}
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="pick-time" className="text-sm font-medium text-gray-700">
                        Time
                    </label>
                    <input 
                        type="text"
                        placeholder="Select your time"
                        onFocus={(e) => (e.target.type = "time")}
                        onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                        name="pick-time" 
                        id="pick-time" 
                        className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:outline-none sm:text-sm bg-white text-gray-800 placeholder-gray-400"
                    />
                </div>

                </div>

            </div>

            {/* drop-off option */}
            <div  className="flex min-w-0 w-full flex-col gap-4 bg-white p-3 sm:p-5 rounded-xl shadow-sm">
                 {/* heading row */}
                <div className="flex items-center gap-2">
                    <input 
                        type="radio" 
                        name="drop-option" 
                        id="drop-off" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="drop-off"> 
                        <h1 className="text-lg font-semibold text-gray-800">Drop-Off</h1>
                    </label> 
                </div>
            
{/* field grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 min-w-0 w-full">

                {/* location input */}
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="drop-location" 
                    className="text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <select 
                    name="drop-location" 
                    id="drop-location" 
                    className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:outline-none sm:text-sm bg-white text-gray-800">
                        
                         <option value="" disabled selected hidden>Select your city</option>
                        <option value="">PORT-HARCOURT</option>
                        <option value="location1">LAGOS</option>
                        <option value="location2">ABUJA</option>
                    </select>
                </div>

                {/* date input */}
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="drop-date" 
                    className="text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <input 
                        type="text"
                        placeholder="Select your date"
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                        name="drop-date" 
                        id="drop-date" 
                        className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:outline-none sm:text-sm bg-white text-gray-800 placeholder-gray-400"
                    />
                     

                </div>    

                {/* time input */}
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="drop-time" className="text-sm font-medium text-gray-700">
                        Time
                    </label>
                    <input 
                        type="text"
                        placeholder="Select your time"
                        onFocus={(e) => (e.target.type = "time")}
                        onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
                        name="drop-time" 
                        id="drop-time" 
                        className="p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:outline-none sm:text-sm bg-white text-gray-800 placeholder-gray-400"
                    />
                </div>

             </div>

        </div>

</div>
</div>  

    )
}


export default RentalOptions;