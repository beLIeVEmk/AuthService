const express = require("express");
const serverConfig = require("./config/serverConfig");
const apiRoutes=require('./routes/index')
const app=express()



const startServer=()=>{
    app.use(express.json())
    app.use('/api',apiRoutes)
    app.listen(serverConfig.PORT,()=>{
        console.log(`Server running at port ${serverConfig.PORT}`)
    })
}

startServer()
