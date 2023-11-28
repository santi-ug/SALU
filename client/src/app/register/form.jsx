"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export function RegisterForm() {
    const onSubmit = (error) => {
        error.preventDefault();
        console.log("Register")
    }
    return (
        <form className="space-y-8 w-[400px]">
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Nombre</h1>
                <Input type={"text"} />
            </div>
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Correo Electronico</h1>
                <Input type={"email"} />
            </div>
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Contraseña</h1>
                <Input type={"password"} />
            </div>
            <Button className="w-full" size="lg" variant="subtle">Registrarme</Button>
        </form>
    )
}