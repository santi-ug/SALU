"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";

export function LoginForm() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const loginUser = (e) => {
        e.preventDefault();
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