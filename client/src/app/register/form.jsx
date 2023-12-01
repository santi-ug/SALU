"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useAuth } from "@/context/AuthContext.jsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast';
import { errorUI, registerRequest } from "../../api/auth.js";
import { axiosPlease } from "../layout";

export function RegisterForm() {
    const navigate = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) navigate.push('/profile')
    }, [isAuthenticated])

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registerUser = async (e) => {
        e.preventDefault();
        const {name, email, password} = data
        try {
            const {data} = await registerRequest({name, email, password})
            const redirect = errorUI(data, setData, true)
            if (redirect) navigate.push('/login')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <form onSubmit={registerUser} className="space-y-8 w-[400px]">
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Nombre</h1>
                <Input value={data.name} onChange={(e) => setData({...data, name: e.target.value})} type={"text"} />
            </div>
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Correo Electronico</h1>
                <Input value={data.email} onChange={(e) => setData({...data, email: e.target.value})} type={"email"} />
            </div>
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Contraseña</h1>
                <Input value={data.password} onChange={(e) => setData({...data, password: e.target.value})} type={"password"} />
            </div>
            <Button className="w-full" size="lg" variant="subtle">Registrarme</Button>
        </form>
    )
}