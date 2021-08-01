const express = require('express')
const jwt = require('jsonwebtoken')
const Authetication = require('./middlewares/auth')
const ValidateLoginData = require('./middlewares/validateLoginData')
const Products = require('./products')
const Users = require('./users')
const Router = express.Router

const products = new Products
const users = new Users

const router = Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.post('/login', ValidateLoginData, (req, res, next) => {
  const token = jwt.sign(req.body, 'LASTKISS', { expiresIn: '1d' })
  res.status(200).json({ token })
})


/* private routes */

router.use(Authetication)

router.get('/products', async (req, res, next) => {
  res.json({
    products: products.findAll()
  })
})

router.get('/users', async (req, res, next) => {
  res.json({
    users: users.findAll()
  })
})

module.exports = router
