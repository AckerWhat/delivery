import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nicolaamoruso1015:19150405@cluster0.t31avuf.mongodb.net/delivery-system').then(()=>console.log("DB conectada"));
}