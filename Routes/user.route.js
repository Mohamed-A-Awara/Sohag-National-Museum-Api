const express = require('express')
const router = express.Router()

// Imports Files
const {authenticateUser } = require('../Middlewares/authenticate.middleware')
const UserControl = require('../Controllers/user.control')
const {validateID} = require('../Middlewares/Validate.middleware')
const { ImageUpload } = require('../Middlewares/uploadImage')


// Routes

router.get('/user' , authenticateUser , UserControl.getUser )
router.delete('/user/:id' ,validateID , authenticateUser  , UserControl.deleteUser )
router.patch('/user/update' , ImageUpload.single('image') , authenticateUser , UserControl.updateUser)












// UploadImage
// router.post('/user/upload' , ImageUpload.single('logo') , authenticateUser , UserControl.UploadControl)

module.exports = router