const { default: mongoose } = require("mongoose");

module.exports = {
    validate: function(schema) {
        return (req, res , next)=> {
            const {error} = schema.validate(req.body , {abortEarly : false})
            console.log("TEstttttttttttttttttttttttttttttttttt");
            if (error) {
                let errorMsg = error.details.map((item)=>{
                    return { Msg  : item.message , path : item.path}
                })
                return res.status(404).json(errorMsg)
            }
            next()
            // console.log("Form validate " + error);
        }
    },
    validateID : (req , res , next)=>{
        let id = req.params.id
        if (! id || ! mongoose.isValidObjectId(id)){
            return res.status(400).send({
                validateID : "Object ID is Required ! 🤦‍♂️"
            })
        }
        next()
    }
}
