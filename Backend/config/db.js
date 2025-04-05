import mongoose from "mongoose";

const connectDb =  async()=>{
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology : true
    })

    console.log(`mongodb connected: ${conn.connection.host}`);
  }
  catch(error){
    console.log(error.msg);
    process.exit(1);
  }
}

module.exports = connectDb;