require('dotenv').config()
const routerAuth = require('./Routes/authRoute')
const routerclient = require('./Routes/clientRoute')
const routerManager = require('./Routes/managerRoute')



const express = require('express')
const app = express()

app.use(express.json())

app.use('/api/auth',routerAuth)
app.use('/api/user',routerclient)
app.use('/api/user',routerManager)





const port = process.env.PORT || 8081
app.listen(port, (err)=> {
    if(!err){
    console.log(`the port ${port} is running`)
    }else{
        console.log(err)
    }
})