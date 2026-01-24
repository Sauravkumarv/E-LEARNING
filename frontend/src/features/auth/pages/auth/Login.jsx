import AuthLeftPanel from "../../components/AuthLeftPanel";
import Input from "../../../../shared/ui/layout/auth/Input";
import Button from "../../../../shared/ui/layout/auth/Button";
import { LOGIN_CONFIG } from "../../../../config/authConfig";
import { BUTTON_TEXT } from "../../../../config/buttonText.config";
import { useAuth } from "../../hooks/useAuth";
import AuthLayout from "../../../../shared/ui/layout/auth/AuthLayout";
import { ROUTES } from "../../../../config/routes.config";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();

  return (
    <AuthLayout
      left={<AuthLeftPanel />}
      right={
        <form
          onSubmit={login}
          className="w-full max-w-md bg-white 
          p-8 rounded-xl shadow-lg "
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Login
          </h2>

          <Input {...LOGIN_CONFIG.email} />
          <Input {...LOGIN_CONFIG.password} />

          <Button type="submit">
            {BUTTON_TEXT.LOGIN}
          </Button>
          <p className="text-center text-sm mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to={ROUTES.signup}
              className="text-blue-600 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      }
    />
  );
};

export default Login;
