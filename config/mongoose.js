const mongoose=require('mongoose');

const connectToDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://onkar:onkar123@cluster0.fhxwhpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected to db");
    }
    catch(err)
    {
        console.error("error:",err);
        process.exit(1);
    }
};
module.exports=connectToDB;