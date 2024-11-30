import userRegModel from "../models/UserRegSchema.js";
const checkUser=async(phone)=>{
    try
    {
        const record=await userRegModel.findOne({phone});
        console.log(record)
        if (!record)
            return true;
        else
            return false;
    } 
    catch (error) 
    {
        console.error('Error in checking for phone number', error);
    }
}
export default checkUser;