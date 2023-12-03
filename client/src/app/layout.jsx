import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import SessionAuthProvider from "../context/SessionAuthProvider.jsx";
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <SessionAuthProvider>
          <Navbar />
            <Toaster position="bottom-right" toastOptions={{duration: 3000}} />
            {children}
        </SessionAuthProvider>

      </body>
    </html>
  )
}
