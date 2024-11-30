import userRegModel from "../models/UserRegSchema.js";

const registerUser = async(phone,password) =>{
    try 
    {
        let response = await userRegModel.create({
          phone,
          password
        });
        response={success:true, message:"Signed up successfully !"}
        console.log("User registered successfully");
        return response;
    } 
    catch (error) 
    {
        response={success:false, message:"Server error. Please try again !"}
        console.error("Error adding user:", error);
        return response;
    }
}
export default registerUser;