const { body, validationResult } = require('express-validator')

const registerValidation = () => {
  return [
    body('name').isLength({ min: 4 }),
    body('email').isEmail(),
    body('password').isLength({ min: 4 })
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  errors.array().map(err => {
    req.flash('error', err.param + ': ' + err.msg)
  })
  return res.redirect('/register')
}

module.exports = { registerValidation, validate }
