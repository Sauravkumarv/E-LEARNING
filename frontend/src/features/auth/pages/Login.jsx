import AuthLeftPanel from "../components/AuthLeftPanel";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";
import { LOGIN_CONFIG } from "../../../config/authConfig";
import { BUTTON_TEXT } from "../../../config/buttonText.config";
import { useAuth } from "../hooks/useAuth";
import AuthLayout from "../../../shared/ui/layout/AuthLayout";

const Login = () => {
  const { login } = useAuth();

  return (
    <AuthLayout
      left={<AuthLeftPanel />}
      right={
        <form
          onSubmit={login}
          className="w-full max-w-md bg-white 
          p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Login
          </h2>

          <Input {...LOGIN_CONFIG.email} />
          <Input {...LOGIN_CONFIG.password} />

          <Button type="submit">
            {BUTTON_TEXT.LOGIN}
          </Button>
        </form>
      }
    />
  );
};

export default Login;
