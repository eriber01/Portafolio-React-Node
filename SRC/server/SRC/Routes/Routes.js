const express = require('express')
const Routes = express.Router()
const SendMails = require('../Controllers/Mail/Nodemailer')
// const fileUpload = require('express-fileupload')
// const path = require('path')

const ProjectModel = require('../Models/projects')

//Constructors
//Create Project
const CreateProject = require('../Controllers/CRUD/CreateProject')

Routes.get('/login', async (req, res) => {
    res.json({
        Name: 'Eriber',
        Apellidos: 'Tejeda Amparo'
    })
})

Routes.get('/postman', async (req, res) => {
    res.json({
        saludo: 'hola mundo'
    })
})

Routes.post('/createProject', async (req, res) => {
    // console.log(req.files);
    // await CreateProject(req, res)

    // res.json({ status: "success" })

})

Routes.post('/sendMail', async (req, res) => {
    const emailData = await req.body.data
    /* console.log(emailData.name); */
    //console.log(emailData);
    await SendMails(emailData, res)
})

Routes.post('/image', async (req, res) => {
    // const ProjectData = await req.body.data
    console.log(req.files)

//     let sampleFile;
//     let uploadPath;

//     sampleFile = await req.files.image
//     console.log(sampleFile.name);
//     uploadPath = path.join(__dirname);
//     console.log(uploadPath);
//    await sampleFile.mv(uploadPath, function (err) {
//         if (err)
//             return res.status(500).send(err);

//         res.send('File uploaded!');
//     });
    // const { file } = req
    // console.log(file);
    res.json({ status: "success" })
})



module.exports = Routes