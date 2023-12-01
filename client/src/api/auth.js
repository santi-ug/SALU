import axios from 'axios';
import { toast } from 'react-hot-toast';

export const API = axios.create({
    baseURL: 'http://localhost:8080/api/v1/auth',
    withCredentials: true
  })

export const registerRequest = (user) => API.post('/register', user)
export const loginRequest = (user) => API.post('/login', user)
export const logoutRequest = () => API.post('/logout')

export const errorUI = (data, bool) => {
    if (data.error) {
        toast.error(data.error)
        return false
    } else {
        if (bool) toast.success('Registro exitoso')
        if (!bool) toast.success('Login exitoso')
        return true
    }
}