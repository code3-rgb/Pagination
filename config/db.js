const mongoose = require('mongoose')


const connectDb = async ()=>{
    // try {
    //     await mongoose.connect('mongodb://27017/mern',{
    //         useNewUrlParser : true,
    //         useFindAndModify: true,
    //         useUnifiedTopology: true,
    //         useCreateIndex: true,
    //     })

    //     console.log('MongoDb connection Success')
    // } catch (error) {
    //     console.log('MongoDb connection failed')
    //     process.exit(1)
    // }

    try {
        await mongoose.connect('mongodb://localhost:27017/mern-pagination');
        console.log("Connected to database")
      } catch (error) {
        console.log('MongoDb connection failed')
        process.exit(1)
      }

}

module.exports = connectDb