import mongoose from 'mongoose';
import { getEnv } from '../utils'
import dbconfig from '../config/dbconfig';
const env = getEnv('NODE_ENV', 'development');
const dbName = getEnv('DB_NAME', 'test');
const config = dbconfig[env as keyof typeof dbconfig];

let connectionPromise: Promise<typeof mongoose> | null = null;

const initDatabase = async () => {
    // Check if there's already an ongoing or established connection
  if (connectionPromise) {
    return connectionPromise;
  }
  // If not, proceed to establish a new connection
  connectionPromise = mongoose.connect(config.db, {
    serverSelectionTimeoutMS: 5000, // this option replaces socketTimeoutMS
    dbName: dbName,
  });
  mongoose.connection
    .on('error', function (err) {
      console.log('⛔ Error: Could not connect to MongoDB Atlas. ' + err.message); // Adjusted to use err.message for compatibility
    })
    .on('open', function () {
      console.log('🍃 Connection established with MongoDB Atlas.');
    });

    return connectionPromise;
};

export default initDatabase
