import apiClient from "../../../config/axios.config"

export const signupApi=(data)=>{
  return apiClient.post("/auth/signup",data)
}

export const loginApi=(data)=>{
  return apiClient.post("/auth/login",data)
}
