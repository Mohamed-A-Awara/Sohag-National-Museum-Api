const asyncHandler = require("express-async-handler");
const User = require('../Models/User.model')

const UserControl = {
    getUser : asyncHandler(async (req ,res)=> {
        // res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        // res.setHeader('Pragma', 'no-cache');
        // res.setHeader('Expires', '0');
        res.status(200).json( req.user )
    }), 
    deleteUser : asyncHandler (async (req , res )=>  {
        let id = req.params.id 
        await User.findByIdAndDelete(id)
        res.send({DeleteStatus : "Account Deleted..."})
    }),
    updateUser : asyncHandler (async (req , res )=>{
        let id = req.user.id
        let user = req.body 
        // console.log(req.user);
        let file = req.file
        // console.log(file);
        if (file){
            let fileName = '/api/images/' + file.filename
            user.image = fileName
        }
        let newData = await User.findByIdAndUpdate(id , req.body , {new : true  })
        console.log("Hello ");
        res.status(200).json({UserUpdated  : newData})
    }),

}

module.exports = UserControl
