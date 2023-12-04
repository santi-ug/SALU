"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { errorUI } from "../../services/auth.js";

export function LoginForm() {
    const navigate = useRouter();
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = data

        const responseNextAuth = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (responseNextAuth?.error) {
            // false = login
            errorUI(responseNextAuth, false);
            console.error(responseNextAuth)
            return;
        } else {
            // false = login
            errorUI(responseNextAuth, false);
        }

        navigate.push('/profile');
    }
    
    return (
        <form onSubmit={handleSubmit} className="space-y-8 w-[400px]">
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