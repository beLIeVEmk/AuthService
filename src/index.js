const express = require("express");
const serverConfig = require("./config/serverConfig");

const app=express()

app.use(express.json())

const startServer=()=>{
    app.listen(serverConfig.PORT,()=>{
        console.log(`Server running at port ${serverConfig.PORT}`)
    })
}

startServer()
