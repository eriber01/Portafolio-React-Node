const express = require('express')
// const mongoose = require('mongoose')
const app = express()


//config .evn
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const port = process.env.PORT || 3001

//connect to database
const connectDB = require('./Config/mongoConfig')
connectDB()

app.use(express.json())

app.use('/api', require('./Routes/Routes.js'))

app.listen(port, (req, res)=>{
    console.log(`Estas en el Server ${port}`);
})