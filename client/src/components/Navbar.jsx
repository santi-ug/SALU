import Link from "next/link"

export default function Navbar() {
    return (
        // navbar goes here
        <nav className="bg-white">
            <div className="max-auto">
                <div className="flex justify-between">

                    <div className="flex space-x-4">
                        {/* // logo  */}
                        <div>
                            <Link href="#" className="flex items-center py-3 px-2">
                                <img src="SALU logo 2.png" alt="Dog Logo" className="h-16 w-16 mr-2"/>
                            </Link>
                            
                        </div>

                        {/* primary nav  */}
                        <div className="flex items-center space-x-1">
                            <Link href="#" className="py-5 px-3 text-teal-700">Catalogo</Link>
                            <Link href="#" className="py-5 px-3 text-teal-700">Conocenos</Link>
                        </div>
                    </div>
                
                    {/* secondary nav */}
                    <div>secondary nav</div>

                </div>
            </div>
        </nav>
        // mobile menu 

        // content goes here
    )
}