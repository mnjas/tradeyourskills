"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthForm from '../../components/form/Form'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      })

      if (!response.ok) {
        const errorMessage = await response.text()
        setError(errorMessage)
      } else {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        localStorage.setItem('name', data.name)
        window.dispatchEvent(new Event("authChanged"))
        router.push('/')
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  return (
    <AuthForm
      title="Se connecter"
      onSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      submitLabel="Se connecter"
    />

  )
}
