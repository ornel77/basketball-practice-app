import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.error(err);
        process.exit(1) // 1 code means a failure 0 means success
    }
}