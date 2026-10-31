function Footer () {
    return (
        <footer>

            <div className="bg-black px-6 pt-8 pb-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT AREA */}
                <div >
                    <h2 className="text-2xl font-bold text-blue-600 mb-4">MORENT</h2>
                    <p className="text-sm text-gray-500 leading-6 max-w-xs">our vision is to provide convenience <br /> and help to increase your sales business</p>

                </div>
              {/* RIGHT AREA */}
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">

                    {/* about */}
                    <div>
                        <h3 className= "font-bold text-lg mb-4 text-white">About</h3>

                        <ul className="space-y-3 text-gray-500">
                            <li>About us</li>
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                        </ul>
                        

                    </div>

                    {/* community */}
                    <div>
                        <h3 className= "font-bold text-lg mb-4 text-white">Community</h3>

                         <ul className="space-y-3 text-gray-500">
                            <li>Events</li>
                            <li>Blog </li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                        
                    </div>

                    {/* social */}

                    <div>
                        <h3 className= "font-bold text-lg mb-4 text-white">Socials</h3>

                         <ul className="space-y-3 text-gray-500">
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>

                    </div>

                </div>

                {/* bottom footer */}

            
           <hr className="col-span-full text-white" />
            <div className="justify-between items-center flex  pt-4 w-full col-span-full ">

                
                <div className="text-white">
                    <h3>© 2026 MORENT. All rights reserved.</h3>
                </div>
                {/* left side */}

                <div className="text-white gap-6 flex ">
                    <a href="#"> Privacy & Policy</a>
                    <a href="">Terms & Condition</a>
                </div>
            </div>
                

        </div>

        </footer>
        
    )
}


export default Footer;