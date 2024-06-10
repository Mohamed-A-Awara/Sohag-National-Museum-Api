const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const fs = require('fs');
const { type } = require("os");

const UserSchema = new Schema ({
    firstName : { type : String , required : true, trim : true},
    lastName : { type : String , required : true, trim : true},
    username : { type : String ,  },
    email : { type : String, required : true, trim : true, unique : true},
    password : { type : String, reuired : true , trim : true, },
    address : { type : String, trim : true, },
    nationalID : { type : String, trim : true },
    phone :{type : String, trim : true },
    age :{ type : Number , default : 20},
    gender : {type : String  , trim : true},
    nationality  :{type : String , trim : true},
    isAdmin : { type : Boolean, default : false},

    // Upload Img
    image : { type : String, trim : true , default : "/api/images/logo.png"}
})

// Operation on Schema
UserSchema.pre('save' ,async function (next){ 
    try {
        let user = this 
        if (!user.isModified('password')){
            return next()
        }
        let hashedpassword = await bcrypt.hash(user.password , 8)
        user.password = hashedpassword
        next()
    }
    catch(error){
        next(error)
    }
})
// Method For Login
UserSchema.methods.comparePassword = function(pass){
    return bcrypt.compare(pass , this.password)
}
// Image Handle

const User = mongoose.model('User' , UserSchema)
module.exports = User