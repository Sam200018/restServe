const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.MONGODB_ATLAS_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })


        console.log('Si se puedo conectar a la base de datos  ');


    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a la base datos ');
    }


}



module.exports = {
    dbConnection
}