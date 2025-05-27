const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../db')

const router = express.Router()

// Inscription
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, skill, interest, city, phone, description } = req.body

    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
    if (rows.length > 0) return res.status(400).send('Cet email est déjà utilisé')

    const hashed = await bcrypt.hash(password, 10)

    await pool.query(
      'INSERT INTO users (name, email, password, skill, interest, city, phone, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, email, hashed, skill, interest, city, phone, description]
    )

    res.status(201).send('Compte créé avec succès !')
  } catch (err) {
    console.error(err.stack)
    res.status(500).send(err.message)
  }
})


// Connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
  if (rows.length === 0) return res.status(400).send('Utilisateur introuvable')

  const user = rows[0]
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return res.status(401).send('Mot de passe incorrect')

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' })

  res.json({ token, name: user.name, id: user.id })
})

module.exports = router
