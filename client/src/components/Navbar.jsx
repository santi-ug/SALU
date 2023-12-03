"use client";

import { logoutRequest } from "@/services/auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";

export default function Navbar() {
    const {data: session} = useSession();
    const navigate = useRouter();

    const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);

    const logoutUser = async (e) => {
        e.preventDefault();

        try {
            signout()   
        } catch (error) {
            console.log(error);
        }
        console.log("Logged Out")
    }

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
                    
                    { session?.user ? (
                        <div href="/" className="py-5 px-3">
                            <Button onClick={() => logoutRequest()} className="w-full-[10px]" size="lg" variant="subtle">Logout</Button>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/login" className="py-5 px-3 hover:text-gray-700" >Login</Link>
                            <Link href="/register" className="py-5 px-3">
                                <Button href="/register" className="w-full-[10px]" size="lg" variant="subtle">Registrarme</Button>
                            </Link>
                        </div>
                    )}

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