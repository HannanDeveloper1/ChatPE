import dotenv from 'dotenv'
dotenv.config()

import app from './src/app.js';

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Chatty server is running on port ${PORT}`);
});