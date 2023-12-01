"use client";

import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, logoutRequest } from "../api/auth.js";

export const AuthContext = createContext({})

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider')
    }
    return context;
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signin = async (info) => {
        try {
            const {data} = await loginRequest(info)
            setIsAuthenticated(true)
            setUser(data)
            return data
        } catch (error) {
            console.error(error);
        }
    }

    const signout = async () => {
        try {
            await logoutRequest()
            Cookies.remove("token");
            setIsAuthenticated(false);
            setUser(null);
        } catch (error) {
            console.error(error);
        
        }

    }

    return (
        <AuthContext.Provider value={{
            signin,
            signout,
            user,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}