import Link from "next/link"

export default function LandingPage() {
    return (
        <div className="w-full h-full bg-contain">
            <Link href="#">
                <img src="landingpage.png" alt="Landing Page" className="w-full h-full bg-contain"/>
            </Link>
        </div>
    )
}