require('dotenv').config()
const mongoos = require('./Config/config')

const routerAuth = require('./Routes/authRoute')
const routerclient = require('./Routes/clientRoute')
const routerManager = require('./Routes/managerRoute')



const express = require('express')
const app = express()
const {errorHandler}= require('./Middlewares/errorMiddleware')
const {routeErrorHandler}= require('./Middlewares/routerMiddlware')

app.use(express.json())

app.use('/api/auth',routerAuth)
app.use('/api/user',routerclient)
app.use('/api/user',routerManager)

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