import * as dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config()

const mongoDBUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/';

const db = async () => {
    try {;
      await mongoose.connect(mongoDBUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  };

export default db;
