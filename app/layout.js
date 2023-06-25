import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Curriculum',
  description: 'Web Curriculum Vitae de Eudes Azevedo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">

      <body className=''>
        {children}
      </body>
      
    </html>
  )
}
