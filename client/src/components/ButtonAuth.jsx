"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth() {
    const {data: session, status} = useSession();

    console.log({session,status});

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (session) {
        return (
            <>
                Signed in as {session.user.name} <br />
                <button onClick={() => signOut()}>
                    Sign out
                </button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()} >
                Sign in
            </button>
        </>
    );
}