import otpModel from "../models/OtpSchema.js";

const saveOtp = async(phone,otp)=>{
    try
    {
      await otpModel.findOneAndUpdate(
        {phone},
        {otp},
        {new:true,upsert: true}
      )
      console.log("Otp Saved")
    }
    catch (error)
    {
      console.error('Error saving OTP:', error);
    }
};

export default saveOtp;