import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;  // Accessing the MongoDB URI
        if (!uri) {
            throw new Error('MongoDB URI not provided in environment variables');
        }
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;

