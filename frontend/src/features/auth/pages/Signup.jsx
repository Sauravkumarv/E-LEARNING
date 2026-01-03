import { useAuth } from "../hooks/useAuth"

export default function Signup(){

const {signup}=useAuth();
  return(
    <form onSubmit={signup}>
      <input name="username"/>
      <input name="email"/>
      <input name="password"/>
      <button>Signup</button>
    </form>
  )
}