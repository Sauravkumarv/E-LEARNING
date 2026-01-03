import { loginApi, signupApi } from "../services/auth.service";

export function useAuth(){
const signup=async(e)=>{
e.preventDefault();
const formData=new FormData(e.target);
const data=Object.fromEntries(formData);

await signupApi(data);
}

const login=async(e)=>{
e.preventDefault();
const formData=new FormData(e.target);
const data=Object.fromEntries(formData);

await loginApi(data)
}

return {signup,login}

}