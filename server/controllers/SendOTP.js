import fetch from 'node-fetch';
import dotenv from 'dotenv';

const sendSMS = (number)=>{
    dotenv.config();
    const otp = Math.floor(Math.random() * (10000 - 1000)) + 1000;

    const API_KEY = process.env.FAST2SMS_API_KEY;
    const numbers = number;
    const variables_values = String(otp);
    const route = "otp";

    const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${API_KEY}&variables_values=${variables_values}&route=${route}&numbers=${numbers}`;

    const options = {
    method: 'GET',
    headers: {
        'cache-control': 'no-cache'
    }
    };

    const otpRequest=async () => {
    try 
    {
        const response = await fetch(url, options);
        const data = await response.json();
        if (!response.ok)
        throw new Error(JSON.stringify(data)); 
    } 
    catch (error) 
    {
        console.error("Detailed error:", error.message || error);
    }
    };
    otpRequest();
}
export default sendSMS;
