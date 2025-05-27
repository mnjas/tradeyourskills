import localFont from 'next/font/local'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './layout.scss'

const bigJohn = localFont({
  src: './fonts/BigJohn.woff2',
  display: 'swap',
})

export const metadata = {
  title: "Trade Your Skills",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={bigJohn.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
