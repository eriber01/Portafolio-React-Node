const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(require('./Routes/Routes.js'))

app.listen(port, (req, res)=>{
    console.log(`Estas en el Server ${port}`);
})