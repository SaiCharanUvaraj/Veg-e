import userRegModel from "../models/UserRegSchema.js";

const registerUser = async(phone,password) =>{
    try 
    {
        await userRegModel.create({
          phone,
          password
        });
        return {success:true, message:"Signed up successfully !"};
    } 
    catch (error) 
    {
        const response={success:false, message:"Server error. Please try again !"}
        console.error("Error in registering user", error);
        return response;
    }
}
export default registerUser;