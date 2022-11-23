const mongoose = require('mongoose')


const connectDb = async ()=>{
    try {
        await mongoose.connect('mongodb://27017/mern-pagination', {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log('MongoDb connection Success')
    } catch (error) {
        console.log('MongoDb connection failed')
        process.exit(1)
    }
}

module.exports = connectDb