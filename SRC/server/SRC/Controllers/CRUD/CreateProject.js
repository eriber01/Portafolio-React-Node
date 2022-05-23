const ProductModel = require('../../Models/projects')

//upload the image
const CloudinaryConfig = require('../../Config/cloudinaryConfig')
const Cloudinary = require('cloudinary')
Cloudinary.config(CloudinaryConfig)

//handle the images file
const fs_extra = require('fs-extra')

const CreateProject = async (data, res) => {

    // console.log(data);

    let arrayImage = []
    let imageLink = []
    await arrayImage.push(data.files.file0, data.files.file1, data.files.file2, data.files.file3)
    // console.log(arrayImage);
    // console.log(arrayImage.length)
    for (let i = 0; i < arrayImage.length; i++) {
        const element = arrayImage[i];
        // console.log(element);

        const imageData = await Cloudinary.v2.uploader.upload(element[0].path)
        imageLink.push(imageData.url)

        await fs_extra.unlink(element[0].path)
    }


    // console.log(imageLink);

    let newProject = new ProductModel({

        projectName: data.body.projectName,
        linkLocation: data.body.linkLocation,
        linkCode: data.body.linkCode,
        projectDescription1: data.body.projectDescription1,
        projectDescription2: data.body.projectDescription2,
        projectDescription3: data.body.projectDescription3,
        projectResume: data.body.projectResume,
        imgProjectPrincipal: imageLink[0],
        imgProjectDetails1: imageLink[1],
        imgProjectDetails2: imageLink[2],
        imgProjectDetails3: imageLink[3],
        textProjectDetails1: data.body.textProjectDetails1,
        textProjectDetails2: data.body.textProjectDetails2,
        textProjectDetails3: data.body.textProjectDetails3,
    })

    await newProject.save((err, result) => {
        if (err) {
            return res.json({
                status: 'error',
                crud: 'create'
            })
        } else {
            const id = newProject._id
            console.log(id)
            return res.json({
                status: 'success',
                crud: 'create'
            })
        }
    })

    // res.json({
    //     data: newProject
    // })
}

module.exports = CreateProject