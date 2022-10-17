require('dotenv').config()
const mongoos = require('./Config/config')
const express = require('express')
const app = express()
app.use(express.json())

//router
const routerAuth = require('./Routes/authRoute')
const routerclient = require('./Routes/clientRoute')
const routerManager = require('./Routes/managerRoute')

//Middleware
const {errorHandler}= require('./Middlewares/errorMiddleware')
const {routeErrorHandler}= require('./Middlewares/routerMiddlware')

//router
app.use('/api/auth',routerAuth)
app.use('/api/user',routerclient)
app.use('/api/user',routerManager)

//Middleware
app.use(errorHandler)
app.use(routeErrorHandler)




const port = process.env.PORT || 8081
app.listen(port, (err)=> {
    if(!err){
    console.log(`the port ${port} is running`)
    }else{
        console.log(err)
    }
})