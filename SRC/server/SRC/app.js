const express = require('express')
// const mongoose = require('mongoose')
const app = express()

//handle send the image to the frontend to backend
const fileUpload = require('express-fileupload')

//handle the charge of the images
const multer = require('multer')
const path = require('path')

//config .evn
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const port = process.env.PORT || 3001

//connect to database
const connectDB = require('./Config/mongoConfig')
connectDB()

// save end rename the images
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, callback) => {
        callback(null, new Date().getTime() + path.extname(file.originalname));
    }
})

app.use(multer({ storage }).fields([{ name: 'file0' },{ name: 'file1' }, { name: 'file2' }, { name: 'file3' }]))

//static files
app.use(express.static(path.join(__dirname + '/public')))

app.use(express.json())


// app.use(fileUpload({
//     destination:'public/images'
// }))

// app.use(fileUpload())

app.use('/api', require('./Routes/Routes.js'))

// app.use(express.static(path.join(__dirname, "public")));

// app.use("/uploads", express.static(path.join(__dirname, 'public/images')));

app.listen(port, (req, res) => {
    console.log(`Estas en el Server ${port}`);
})