"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

    return (
        // navbar goes here
        <nav className="bg-gray-300">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex justify-between">

                    <div className="flex space-x-4">
                        {/* // logo  */}
                        <div>
                            <Link href="/" className="flex items-center py-3 px-2">
                                <img src="SALU ONLY LOGO.png" alt="Dog Logo" className="h-16 w-16 mr-2"/>
                            </Link>
                            
                        </div>

                        {/* primary nav  */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/catalog" className="py-5 px-3 hover:text-gray-700">Catalogo</Link>
                            <Link href="/aboutus" className="py-5 px-3 hover:text-gray-700">Conocenos</Link>
                        </div>
                    </div>
                
                    {/* secondary nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link href="/login" className="py-5 px-3 hover:text-gray-700" >Login</Link>
                        <Link href="/register" className="py-2 px-3 bg-aqua hover:bg-aqua-light
                         text-gray-100 hover:text-white rounded">Registrarme</Link>
                    </div>

                    {/* mobile button goes here */}
                    <div className="md:hidden flex items-center" onClick={ () => setToggleHamburgerMenu(!toggleHamburgerMenu)}>
                        <button className="mobile-menu-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>  
                        </button>
                    </div>

                </div>
            </div>

        {/* mobile menu  */}
        {
            toggleHamburgerMenu && (
                <div className="mobile-menu">
                <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-400">Catalogo</Link>
                <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-400">Conocenos</Link>
                </div>
            )
        }

        </nav>

        // content goes here
    )
}