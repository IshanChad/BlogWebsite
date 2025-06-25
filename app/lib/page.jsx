import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://ishanchadha44:Is@060106@cluster0.wurf5dm.mongodb.net/blogApp')
    console.log('DB Connected')
}