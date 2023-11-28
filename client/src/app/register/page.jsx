import { RegisterForm } from './form.jsx'

export default function RegisterPage() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
            <div className="shadow-xl p-4 bg-white rounded-xl">
                Crea una cuenta
                <RegisterForm />
            </div>
        </div>
    )
}