const express = require('express')
const router = express.Router()
const multer = require('multer')
// Import Controllers
const authController = require('../Controllers/auth.control')
const {validate} = require('../Middlewares/Validate.middleware')
const {registrationSchema ,loginSchema } = require('../Validation/auth.validate')

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => cb(null, true),
});

// Create Router 
router.post('/register' , upload.none() ,validate(registrationSchema) , authController.register)
router.post('/login' ,upload.none() , validate(loginSchema) , authController.login)

module.exports = router
