// Requires
const express = require('express')
require('dotenv').config()
require('./DataBase/mongoose')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const indexRoutes = require('./Routes/index.routes')
const app = express()
const port = process.env.PORT || 3000  

// Middlewares.... ❤️

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//     credentials : true
//   }));
  

app.use('/api/images' , express.static('./Uploads'))
// Use index Routes
app.use(indexRoutes)

// Not Found Request
app.all('*' , (req, res)=>{
    res.status(404).send({
        Msg : "Request Not Found ...🤦‍♂️🤦‍♂️🤦‍♂️"
    })
})

// Listen Server 
app.listen(port , ()=>{
    console.log(`Server Is Running On Port ${port}...`);
})
