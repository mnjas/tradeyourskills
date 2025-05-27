const express = require('express')
const pool = require('../db')

const router = express.Router()

// List skills users
router.get('/skill/:skill', async (req, res) => {
  try {
    const { skill } = req.params
    const [rows] = await pool.query(
      'SELECT id, name, email, description FROM users WHERE skill = ?',
      [skill]
    )
    res.json(rows)
  } catch (err) {
    console.error('Erreur lors de la récupération des utilisateurs par compétence :', err)
    res.status(500).send('Erreur serveur')
  }
})

// Fetch user by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query(
      'SELECT id, name, email, skill, city, phone, description FROM users WHERE id = ?',
      [id]
    )

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' })
    }

    res.json(rows[0])
  } catch (err) {
    console.error('Erreur lors de la récupération de l\'utilisateur :', err)
    res.status(500).send('Erreur serveur')
  }
})

// Get all users
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, email, skill, city, phone, description FROM users'
    )
    res.json(rows)
  } catch (err) {
    console.error('Erreur lors de la récupération de tous les utilisateurs :', err)
    res.status(500).send('Erreur serveur')
  }
})

module.exports = router