"use client";
import { useRouter } from "next/navigation";
import React, { useContext } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Profile() {
    const {user, isAuthenticated} = useAuth();
    const navigate = useRouter();

    return (
        <div>
            { isAuthenticated ? (
                <div>
                    <h1>Dashboard</h1>
                    {!!user && (<h1>Hi {user.name}!</h1>)}
                </div>
            ) : (
                <div>
                    <h1>Not Logged In</h1>
                    {navigate.push('/login')}
                </div>
            )}
        </div>
    )
}
