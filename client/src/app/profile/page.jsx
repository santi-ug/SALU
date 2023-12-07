"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext } from 'react';

export default function Profile() {
    const navigate = useRouter();
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>
    }

    console.log(session);

    return (
        // <div>
        //     { isAuthenticated ? (
        //         <div>
        //             <h1>Dashboard</h1>
        //             {!!user && (<h1>Hi {user.name}!</h1>)}
        //         </div>
        //     ) : (
        //         <div>
        //             <h1>Not Logged In</h1>
        //             {navigate.push('/login')}
        //         </div>
        //     )}
        // </div>
        <div className="flex-wrap justify-center px-40">
            <h1>Profile</h1>
            <pre>
                <code className="flex-wrap">{JSON.stringify(session, null, 2)}</code>
            </pre>
        </div>
    )
}
