"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PrivatePage({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    } else {
      router.push('/login')
    }
  }, [router])

  if (!isAuthenticated) {
    return <p>Chargement...</p>
  }

  return children
}
