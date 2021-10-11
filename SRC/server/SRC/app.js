const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res)=>{
    res.send({
        name:'eriber',
        apellido: 'tejeda'
    })
})

app.listen(port, (req, res)=>{
    console.log(`Estas en el Server ${port}`);
})