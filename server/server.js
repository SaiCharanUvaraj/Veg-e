import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import sendOTP from './controllers/SendOTP.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/send-otp', (req, res) => {
    const {number}=req.body;
    res.send("OTP was sent to your number").status(200)
    sendOTP(number);
});

app.post('/verify-otp', (req, res) => {
    const {otp}=req.body;
    res.send(`Otp ${otp} was received by the server`).status(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
