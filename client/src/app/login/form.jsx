"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { errorUI } from "../../api/auth.js";
import { useAuth } from "../../context/AuthContext.jsx";

export function LoginForm() {
    const navigate = useRouter();
    const {signin, isAuthenticated} = useAuth();

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const loginUser = async (e) => {
        e.preventDefault();
        const {email, password} = data
        try {
            const loggedUser = await signin({email, password})
            const redirect = errorUI(loggedUser, setData, false)
            if (redirect) navigate.push('/profile')
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <form onSubmit={loginUser} className="space-y-8 w-[400px]">
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Correo Electronico</h1>
                <Input value={data.email} onChange={(e) => setData({...data, email: e.target.value})} type={"email"} />
            </div>
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Contraseña</h1>
                <Input value={data.password} onChange={(e) => setData({...data, password: e.target.value})} type={"password"} />
            </div>
            <Button className="w-full" size="lg" variant="subtle">Login</Button>
        </form>
    )
}