const joi = require('joi')

const schema = joi.object({
  name: joi.string().pattern(/^[\w]{2,20}$/).required(),
  password: joi.string().pattern(/^[\w!@-_]{8,12}$/).required()
})

const ValidateLoginData = (req, res, next) => {
  const { error } = schema.validate(req.body)

  if (error) {
    const { details } = error
    return res.status(400).json({ details })
  }

  return next()
}

module.exports = ValidateLoginData
