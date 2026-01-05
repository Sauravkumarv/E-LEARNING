import { loginApi, signupApi } from "../services/auth.service";

export function useAuth(){
const signup=async(e)=>{
e.preventDefault();
const form=e.target;
const formData=new FormData(form);
const data=Object.fromEntries(formData);

try {
 const res= await signupApi(data);
if(res){
  alert(res.message)
}
  form.reset();

} catch (error) {
  
}
}

const login=async(e)=>{
e.preventDefault();
const form=e.target;
const formData=new FormData(form);
const data=Object.fromEntries(formData);
try {
  const res=await loginApi(data)
  if(res){
    alert(res.message);
    form.reset();
  }
} catch (error) {
  
}
}

return {signup,login}

}