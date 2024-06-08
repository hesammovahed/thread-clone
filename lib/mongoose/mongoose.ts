import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true)
    if (!process.env.MONOGODB_URL) return console.log("mongo url is not found")
    try {
        await mongoose.connect(process.env.MONOGODB_URL)
        isConnected = true
    } catch (err) {
        console.log(err ,"MongoDB connection error: ")
    }
}