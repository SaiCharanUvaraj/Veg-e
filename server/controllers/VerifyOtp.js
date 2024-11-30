import otpModel from "../models/OtpSchema.js";
const verifyOtp=async(phone,otp)=>{
    try
    {
        const record=await otpModel.findOne({phone});
        if (!record)
            return { success: false, message: 'OTP not found or expired' };
        if (record.otp === otp)
        {
            console.log("OTP verified successfully!");
            return { success: true, message: 'OTP verified successfully!' };
        }
        else
            return { success: false, message: 'Invalid OTP' };
    } 
    catch (error) 
    {
        console.error('Error verifying OTP:', error);
        return { success: false, message: 'Internal server error' };
    }
}
export default verifyOtp;