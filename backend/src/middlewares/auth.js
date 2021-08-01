const jwt = require('jsonwebtoken')

const Authetication = (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).end()
  }

  const [, token] = authorization.split(' ')

  try {
    jwt.verify(token, 'LASTKISS')
    next()
  }
  catch (e) {
    res.status(401).end()
  }
}

module.exports = Authetication
