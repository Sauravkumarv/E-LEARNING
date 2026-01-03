export const signupApi=(data)=>{
  return axios.post("auth/signup",data)
}

export const loginApi=(data)=>{
  return axios.post("auth/login",data)
}
