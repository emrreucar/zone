import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='md:px-[120px] md:py-4 bg-gradient-to-r from-[#111727] to-[#322150]'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
