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
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors
  })
}

module.exports = { registerValidation, validate }
