const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI
// const uri = 'mongodb+srv://eriberDBAdmin:mongoDBpassword@01@portafoliomongodb.wxnkf.mongodb.net/Portafolio?retryWrites=true&w=majority'

const connectBD = async()=>{
    try{
        await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Connection Success')
    }catch(error){
        console.log('Hubo un Error');
        console.log(error);
    }
}

module.exports = connectBD