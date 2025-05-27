"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import styles from "./Header.module.scss"
import Image from "next/image"
import Link from "next/link"
import button from "../../styles/buttons.module.scss"

export default function Header() {
  const [name, setName] = useState('')

  const [showLogout, setShowLogout] = useState(false)

  useEffect(() => {
    const updateName = () => {
      const storedName = localStorage.getItem('name')
      setName(storedName)
    }

    updateName()
    window.addEventListener("authChanged", updateName)

    return () => {
      window.removeEventListener("authChanged", updateName)
    }
  }, [])

  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const onCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={styles.headerWrapper}>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <p>
              <Link href="/">
                <Image
                  className={styles.siteLogo}
                  src="/assets/logo.webp"
                  width={650}
                  height={650}
                  alt="Logo"
                />
              </Link>
            </p>
          </div>

          <div
            className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
            <MenuLink onClick={onCloseMenu} href="/" currentUrl={pathname}>Accueil</MenuLink>
            <MenuLink onClick={onCloseMenu} href="/skills" currentUrl={pathname}>Competences</MenuLink>
            <MenuLink onClick={onCloseMenu} href="/list" currentUrl={pathname}>Nos membres</MenuLink>
            <MenuLink onClick={onCloseMenu} href="/about" currentUrl={pathname}>A propos</MenuLink>
            <MenuLink onClick={onCloseMenu} href="/contact" currentUrl={pathname}>Contact</MenuLink>

            {name ? (
              <button
                className={button.mobileDisconnectButton}
                onClick={() => {
                  localStorage.removeItem('token')
                  localStorage.removeItem('name')
                  onCloseMenu()
                  window.location.href = '/'
                }}
              >
                Se déconnecter
              </button>

            ) : (
              <div className={button.mobileMenuButtons}>
                <Link href="/register" className={button.authButton} onClick={onCloseMenu}>S&rsquo;inscrire</Link>
                <Link href="/login" className={button.authButtonSecondary} onClick={onCloseMenu}>Se connecter</Link>
              </div>
            )}
          </nav>

          {/* Desktop auth buttons */}
          <div className={button.authButtons}>
            {name ? (
              <div className={button.loggedIn}>
                <span onClick={() => setShowLogout(!showLogout)} style={{ cursor: 'pointer' }}>
                  Bonjour, {name}
                </span>
                {showLogout && (
                  <button
                    className={button.disconnect}
                    onClick={() => {
                      localStorage.removeItem('token')
                      localStorage.removeItem('name')
                      window.location.href = '/'
                    }}
                  >
                    Se déconnecter
                  </button>
                )}
              </div>
            ) : (
              <>
                <Link href="/register" className={button.authButton}>S&rsquo;inscrire</Link>
                <Link href="/login" className={button.authButtonSecondary}>Se connecter</Link>
              </>
            )}
          </div>
        </div>
      </header>
      <div className={styles.headerSpacer}></div>
    </div>
  )
}

function MenuLink({ href, children, currentUrl, onClick }) {
  if (currentUrl === href) {
    return <span href={href}>{children}</span>
  }
  return <Link onClick={onClick} href={href}>{children}</Link>
}
