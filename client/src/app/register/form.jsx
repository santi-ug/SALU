"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";

export function RegisterForm() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registerUser = (error) => {
        error.preventDefault();

        // Make API Request

        // try {
        //     const res = await fetch('/api/register', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             email,
        //             password
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     })
        //     if (res.ok) {
        //         // redirect
        //     }
        // } catch (error) {
        //     console.log(error)
        // }

        console.log("Register")
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