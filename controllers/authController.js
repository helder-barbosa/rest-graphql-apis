const jwt = require('jsonwebtoken')
const secret = 'asdfghjkl'

const USERS = {
  'mike@email.com': 'mike123'
}

const auth = async (req, res) => {
  const { user, password } = req.body

  if (USERS[user] && USERS[user] === password) {
    const token = jwt.sign({
      user
    }, secret, { expiresIn: '2 days' })
    return res.send({
      success: true,
      token
    })
  }
  res.send({
    success: false,
    message: 'wrong credentials.'
  })
}


module.exports = {
  auth
}