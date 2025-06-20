import dotenv from 'dotenv';

dotenv.config();

if(!process.env.HF_API_KEY) {
    console.error('\nATTENTION: You need to fill in the .env file\n')
}

// console.log('testing .env: ', process.env.HF_API_KEY)
