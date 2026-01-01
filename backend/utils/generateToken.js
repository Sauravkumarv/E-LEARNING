import { jwt } from "jsonwebtoken";

export const token=jwt.sign(
  {userId:user_id,role:user.role},
  process.env.JWT_SECRET_KEY,
  {expiresIn:"1d"}
)