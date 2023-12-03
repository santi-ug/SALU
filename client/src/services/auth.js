import axios from 'axios';
import { jwtVerify } from 'jose';
import Cookies from 'js-cookie';
import { signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export const API = axios.create({
    baseURL: 'http://localhost:8080/api/v1/auth',
    withCredentials: true
})


// export const registerRequest = (user) => API.post('/register', user)
// export const loginRequest = (user) => API.post('/login', user)
export const logoutRequest = async () => {
    signOut();
    const loggedOut = await API.post('/logout')
    if (loggedOut) Cookies.remove("token");
}
// export const getJwtSecretKey = () => {
//     const secret = process.env.NEXTAUTH_SECRET
//     if (!secret || secret.length === 0) {
//         throw new Error('Environment variable JWT_SECRET is not defined')
//     }
//     return secret
// }
// export const verifyAuth = async (token) => {
//     try {
//         const verifiedToken = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()))
//         return verifiedToken
//     } catch (error) {
//         throw new Error('Token expired')
//     }
// }

export const errorUI = (data, bool) => {
    if (data.error) {
        console.log(data.error);
        toast.error(data.error)
        return false
    } else {
        if (bool) toast.success('Registro exitoso')
        if (!bool) toast.success('Login exitoso')
        return true
    }
}
