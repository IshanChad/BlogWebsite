import mongoose from "mongoose";
// for connection with database, then in models for schema

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://ishanchadha44:Is@060106@cluster0.wurf5dm.mongodb.net/blog-app')
    console.log('DB Connected')
}