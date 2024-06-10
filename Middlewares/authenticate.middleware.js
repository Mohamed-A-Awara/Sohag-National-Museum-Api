const jwt = require('jsonwebtoken')
const User = require('../Models/User.model')
const asyncHandler = require('express-async-handler')


const authenticate = asyncHandler ( async (req , res , next )=>{
    // let token = req?.cookies['access-token']
    let token = 5 ;
    let token2 ;
        if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
        ) {
        token = req.headers.authorization?.split(' ');
        // console.log(req.headers.authorization);
        token2 =token[0].split(' ')[1]
        // console.log(token2);
      }
    // console.log(token2);
    if (! token2 ){
        return res.status(401).json({TokenMsg : "Token is required ! 🤦‍♂️"})
    }
    // console.log(token);


    let decode = jwt.verify(token2 , process.env.SECRET_KEY)
    if (! decode ){
        return res.status(401).json({TokenMsg : "Token is required !mmmmmmmmmmmmmmmmmm 🤦‍♂️"})
    }
    // console.log(decode);
    let user = await User.findById(decode.id)
    req.user = user
    next()
})


module.exports ={
    authenticateUser : authenticate,
}

