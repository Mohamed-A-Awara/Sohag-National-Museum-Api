const User = require('../Models/User.model')
const asyncHandler = require('express-async-handler')
const generateToken = require('../Middlewares/Jwt.middleware')

const authController = {

    register : asyncHandler( async (req , res )=>{
        const existUser = await User.findOne({email : req.body.email})
        if (existUser){
            return res.status(409).json({RegisterMsg : "Email Is Already Taken ! 🤦‍♂️" })
        }
        // console.log("Hello Front");
        let newUser = await User(req.body)
        await newUser.save()
        res.status(201).json({RegisterCreated : newUser})
    }),

    login : asyncHandler(async (req , res )=>{
        const loginData = await req.body
        let user = await User.findOne({email : loginData.email})
        if (! user ){
            return res.status(400).json({LoginStatus : "Invalid Email and Password 🤦‍♂️"})
        }
        let validPassword = await user.comparePassword(loginData.password , user.password)
        if(! validPassword){
            return res.status(400).json({LoginStatus : "Invalid Email and Password 🤦‍♂️"})
        }
        let token = generateToken(user._id)
        // console.log(token);

        const cookieOption ={
            expires : new Date( Date.now() + 7 * 24 * 60 * 60 * 10000)
        }
        res.cookie('access-token' , `Barear ${token}` , cookieOption)
        // console.log(token);
        // console.log(user.email);
        // console.log(validPassword);
        res.status(200).json({token : token , firstName : user.firstName , lastName : user.lastName })
    })
}

module.exports = authController

