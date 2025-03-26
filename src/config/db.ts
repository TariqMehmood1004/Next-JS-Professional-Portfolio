import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable");
}

// Use a cached connection to prevent multiple connections
let isConnected = false;

export const connectDatabase = async () => {
    if (isConnected) {
        console.log("⚡ Using existing MongoDB connection");
        return;
    }

    try {
        console.log("⏳ Connecting to MongoDB...");

        await mongoose.connect(MONGO_URI, {
            bufferCommands: false,
            autoIndex: false,
            serverSelectionTimeoutMS: 20000, // Increase timeout
        });

        isConnected = true;
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        throw new Error("Database connection failed");
    }
};
