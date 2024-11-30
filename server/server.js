import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from "mongoose";

import sendOTP from './controllers/SendOtp.js'
import saveOtp from './controllers/SaveOtp.js';
import verifyOtp from './controllers/VerifyOtp.js';
import registerUser from './controllers/RegisterUser.js';
import checkUser from './controllers/CheckUser.js';
import deleteOtp from './controllers/DeleteOtp.js';
import authUser from './controllers/AuthUser.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

const connectDB = async () => {
    try 
    {
      await mongoose.connect('mongodb://localhost:27017/vege');
      console.log('Connected to MongoDB');
    } 
    catch (err) 
    {
      console.error('MongoDB connection error:', err);
    }
};
connectDB();

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/send-otp', async(req, res) => {
    const {number}=req.body;
    const response=await checkUser(number);
    if(response===false)
    {
        res.send(false).status(200);
        return;
    }
    const otp = Math.floor(Math.random() * (10000 - 1000)) + 1000;
    sendOTP(number,otp);
    saveOtp(number,otp);
    res.send("OTP was sent to your number").status(200);
});

app.post('/verify-otp', async(req, res) => {
    const {number,otp}=req.body;
    const response=await verifyOtp(number,otp);
    deleteOtp(number);
    res.status(200).json(response);
});

app.post('/register-user',async(req,res) =>{
    const {phone,pwd}=req.body;
    const response=await registerUser(phone,pwd);
    res.status(200).json(response);
});

app.post('/auth-user',async(req,res) =>{
    const {phone,pwd}=req.body;
    const response=await authUser(phone,pwd);
    res.status(200).json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
