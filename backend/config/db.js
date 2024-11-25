import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://fiston:karasira7@cluster0.tamdl.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}