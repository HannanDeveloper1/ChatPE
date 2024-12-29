import dotenv from 'dotenv'
dotenv.config()

import app from './src/app.js';
import connectDB from './src/lib/connectDB.js';

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`ChatPE server is running on port ${PORT}`);
  connectDB()
});
