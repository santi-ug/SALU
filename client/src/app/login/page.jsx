import Link from 'next/link';
import { LoginForm } from "./form";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
    <div className="shadow-xl px-8 pb-8 pt-12 bg-white rounded-xl space-y-8">
        <h1 className='font-semibold text-3xl'>Ingresa a tu cuenta</h1>
        <LoginForm />
        <p className='text-center'>
            No te has registrado? <Link className='text-aqua hover:underline' href="/register">Registrarme</Link>{' '}
        </p>
    </div>
</div>
  )
}
