"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";

export function LoginForm() {
    const onSubmit = (error) => {
        error.preventDefault();
        console.log("Login")
    }
    return (
        <form className="space-y-8 w-[400px]">
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Correo Electronico</h1>
                <Input type={"email"} />
            </div>
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1 className="font-semibold">Contraseña</h1>
                <Input type={"password"} />
            </div>
            <Button className="w-full" size="lg" variant="subtle">Login</Button>
        </form>
    )
}