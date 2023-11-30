import axios from "axios";
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import './globals.css';

export const axiosPlease = axios.create({
  baseURL: 'http://localhost:8080/api/v1/auth',
  withCredentials: true
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
        {children}
        </body>
    </html>
  )
}
