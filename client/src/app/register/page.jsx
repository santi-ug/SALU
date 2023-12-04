"use client";

import { useSession } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { RegisterForm } from './form.jsx';

export default function RegisterPage() {
    const navigate = useRouter();
    const {data: session} = useSession();

    if (session?.user) {
        navigate.push('/profile');
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
            <div className="shadow-xl px-8 pb-8 pt-12 bg-white rounded-xl space-y-8">
                <h1 className='font-semibold text-3xl'>Crea una cuenta</h1>
                <RegisterForm />
                <p className='text-center'>
                    Tienes una cuenta? <Link className='text-aqua hover:underline' href="/login">Login</Link>{' '}
                </p>
            </div>
        </div>
    )
}