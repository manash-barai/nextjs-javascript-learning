import mongoose from "mongoose";
let isConnected=false;

export const connectedDB=async()=>{
    mongoose.set("strictQuery",true)
    if(isConnected){
        console.log("mongodb connected");
        return
        
    }

    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"prompt",
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true
    } catch (error) {
        console.log(error);
        
    }
}