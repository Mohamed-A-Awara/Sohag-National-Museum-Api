const jwt = require('jsonwebtoken')

const generateToken = (payload)=>{
    const Key = process.env.SECRET_KEY
    return jwt.sign({id : payload} , Key , {
        expiresIn : "7d"
    })
}

module.exports = generateToken

