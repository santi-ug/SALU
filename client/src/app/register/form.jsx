"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export function RegisterForm() {
    const onSubmit = (error) => {
        error.preventDefault();
        console.log("Register")
    }
    return (
        <form space-y-6>
            <div className="grid w-full max-w-sm items-center gap=1.5">
                <h1>Nombre</h1>
                <Input type={"text"} />
            </div>
            <Input type={"email"} />
            <Input type={"password"} />
            <Button variant="subtle">Registrarme</Button>
        </form>
    )
}