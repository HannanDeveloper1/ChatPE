import mongoose from 'mongoose'

export default async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected at: ${conn.connection.host}`)
    } catch (err) {
        console.error(`Can't connected to Database; Error: ${err.message}`)
    }
}