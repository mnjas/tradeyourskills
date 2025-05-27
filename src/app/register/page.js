"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Form from '../../components/form/Form'

export default function Register() {
  const [name, setName] = useState('')
  const [skill, setSkill] = useState('')
  const [interest, setInterest] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, skill, interest, email, password, city, phone, description }),

      })

      if (!response.ok) {
        const errorMessage = await response.text()
        setError(errorMessage)
      } else {
        router.push('/login')
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  return (
    <Form
      title="BIENVENUE SUR TYS"
      onSubmit={handleSubmit}
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      skill={skill}
      setSkill={setSkill}
      interest={interest}
      setInterest={setInterest}
      city={city}
      setCity={setCity}
      phone={phone}
      setPhone={setPhone}
      description={description}
      setDescription={setDescription}
      error={error}
      submitLabel="S'inscrire"
    />
  )
}
