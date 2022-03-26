const ProductModel = require('../../Models/projects')

const CreateProject = async (data, res) => {

    // const date = new Date()
    // const id = date.getFullYear().toString() + (date.getMonth() + 1).toString() + (date.getDay() + 1).toString() + (date.getMilliseconds() * 5).toString()

    console.log(data);

    let newProject = new ProductModel({
        // id: id,
        projectName: data.pName,
        // projectDescription:  
        projectResume: data.pInfo,
        linkCode: data.pGit,
        linkLocation: data.pLink
    })

    newProject.save((err, result) => {
        if (err) {
            res.json({
                status: 'error',
                crud: 'create'
            })
        } else {
            res.json({
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