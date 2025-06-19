import dotenv from 'dotenv';

dotenv.config();

if(!process.env.HF_API_KEY) {
    console.log('ATTENTION: You need to fill in the .env file')
}

// console.log('testing .env: ', process.env.HF_API_KEY)
