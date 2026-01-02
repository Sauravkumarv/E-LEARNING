import jwt from 'jsonwebtoken'
import "dotenv/config"

export const generateAccessToken =(user)=>{
  console.log(user)
  return jwt.sign(
  {userId:user._id,role:user.role},
  process.env.JWT_SECRET_KEY,
  {expiresIn:"15d"}
)
}


export const generateRefreshToken =(user)=>{
  return jwt.sign(
  {userId:user._id,role:user.role},
  process.env.ACCESS_TOKEN_SECRET,
  {expiresIn:"7d"}
)
}