import Footer from '../components/footer/Footer'
import './layout.scss'
import Header from '../components/header/Header'

// Fonts

// Metadata
export const metadata = {
  title: "Trade Your Skills",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
