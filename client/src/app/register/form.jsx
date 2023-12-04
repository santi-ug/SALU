"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { errorUI } from "../../services/auth.js";

export function RegisterForm() {
    const navigate = useRouter();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    // errors:
    //     error: 'Nombre es requerido'
    //     error: 'Ingrese el correo correctamente'
    //     error: "Correo Electronico ya en uso"
    //     error: 'Contraseña es requerida y debe tener 8 caracteres minimo.'


    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = data

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, email, password}),
            }
        );
        
        const responseAPI = await res.json();
        
        if (responseAPI?.error) {
            errorUI(responseAPI, true);
            return;
        } else {
            errorUI(responseAPI, true);
        }

        const responseNextAuth = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (responseNextAuth?.error) {
            // false = login
            errorUI(responseNextAuth.error, false);
            return;
        }

        navigate.push('/profile');
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-8 w-[400px]">
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