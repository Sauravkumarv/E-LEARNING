import { USER } from "../model/user.js";
import validator from "validator"
export const register = async (req, res) => {
  try {
    const { username, email, password, } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid Email format" });
    }
    if(password.length <6){
       return res.status(400).json({ message: "password must be of 6 digits"});
    }

    const user = await USER.findOne( {email} );

    if (user) {
      return res.status(400).json({ message: "User already Exists" });
    }

    const newUser = await USER.create({
      username,
      email,
      password,
          });
    return res.status(201).json({message:"User registed successfully",newUser})
  } catch (error) {
    console.log("Error while creating newUser in registerControlller",error)
    return res.status(500).json({message:"Something went wrong",error: error.message,})
  }
};


