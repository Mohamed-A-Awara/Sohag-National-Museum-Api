const multer = require('multer')
const path = require('path')
const {v4 : uuidv4} = require('uuid')


// Create Storage Desk for Image 
const ImageStorage = multer.diskStorage({
    destination : function (req , file  , callback){
        callback(null , './Uploads/UserImage')
    },

    filename : function (req , file , callback){
        if (file){
            console.log(file);
            let fileExtention = path.extname(file.originalname)
            // callback(null , uuidv4()+ fileExtention)
            callback(null , file.originalname)
        }else {
            callback(null , false)
        }
    }
})

const ImageUpload = multer({
    storage : ImageStorage,
    fileFilter : function(req , file , callback){
        const fileTypes = / jpg|jpeg|png|gif|svg /
        let validFiles = fileTypes.test(path.extname(file.originalname))
        if (file.mimetype.startsWith('image') && validFiles){
            callback(null , true)
        }else{
            callback("Must be Image " , false)
        }
    },
    // limits : {fileSize : 1024 * 1024 * 5}

})

module.exports = {ImageUpload}