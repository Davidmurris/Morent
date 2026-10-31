function Navbar() { 
    return (
      <header className="bg-white border-b border-gray-200">
        <div className=" flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-6 gap-4 md:gap-0">

            {/* logo section */}
            <div className="nav-logo text-2xl font-bold text-blue-600">
                <a href="">MORENT</a>
            </div>

{/* search section */}
            <div className="nav-search flex items-center gap-2 w-full md:w-96 border border-gray-200 rounded-full px-4 py-2">
                <span>🔍</span>
                <input type="text" 
                placeholder="Search something here"
                className="outline-none flex-1 w-full bg-transparent"/>

            </div>
            {/* icon action area */}
            <div className="nav-actions flex items-center gap-2 ">
                <button type= 'button' aria-label="favourites" 
                className="size-10 rounded-full border border-gray-100 cursor-pointer flex justify-center hover:bg-gray-100  items-center">♡</button>
                <button type= 'button' aria-label="notifications" 
                className="size-10 rounded-full border border-gray-100 cursor-pointer flex justify-center hover:bg-gray-100  items-center">🔔</button>
                <button type= 'button' aria-label="settings"
                className="size-10 rounded-full border border-gray-100 cursor-pointer flex justify-center hover:bg-gray-100 items-center">⚙️</button>
                <button type= 'button' aria-label="profile" 
                className="size-10 rounded-full border border-gray-100 cursor-pointer flex justify-center hover:bg-gray-100 items-center">👤</button>
            </div>

            
        </div>
      </header>
)

}
 
export default Navbar;