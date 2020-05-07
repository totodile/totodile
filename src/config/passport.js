const User = require('../app/models/User')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

function initialize (passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await User.findOne({ where: { email: email } })
    if (user == null) {
      return done(null, false, { message: 'User not found' })
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Wrong password' })
      }
    } catch (e) {
      return done(e)
    }
  }
  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({ where: { id: id } })
    return done(null, user)
  })
}

module.exports = initialize
