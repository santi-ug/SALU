import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { AuthProvider } from "../context/AuthContext.jsx";
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
