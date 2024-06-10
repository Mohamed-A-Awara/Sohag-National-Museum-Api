const { default: mongoose } = require("mongoose");

const URL = process.env.DBLink
mongoose.connect(URL).then(()=> console.log(`DataBase is connected...`)).catch(()=>{
console.log(`Can't Connect To DataBase`)
})


