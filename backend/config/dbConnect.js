import mongoose from "mongoose"
import "dotenv/config"

export const dbConnect=async ()=>{
  try {
   await mongoose.connect(process.env.MONGO_URL)
console.log("DB Connected Successfully")
  } catch (error) {
    console.log("error in connecting DB",error)
  }
}