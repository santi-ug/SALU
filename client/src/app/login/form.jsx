"use client";

import { axiosPlease } from "@/app/layout.jsx";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

export function LoginForm() {
    const navigate = useRouter();

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const loginUser = async (e) => {
        e.preventDefault();
        
        const {email, password} = data
        try {
            const {data} = await axiosPlease.post('/login', {
                email, password
            });
            if (data.error) {
                toast.error(data.error)
            } else {
                setData({});
                navigate.push('/profile')
            }
        } catch (error) {
            console.log(error);
        }
        console.log("Login")
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