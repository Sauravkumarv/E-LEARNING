import AuthLeftPanel from "../../components/AuthLeftPanel";
import Input from "../../../../shared/ui/layout/auth/Input";
import Button from "../../../../shared/ui/layout/auth/Button";
import { SIGNUP_CONFIG } from "../../../../config/authConfig";
import { BUTTON_TEXT } from "../../../../config/buttonText.config";
import AuthLayout from "../../../../shared/ui/layout/auth/AuthLayout";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../config/routes.config";

const Signup = () => {
  return (
    <AuthLayout
      left={<AuthLeftPanel />}
      right={
        <form className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Sign Up
          </h2>

          <Input {...SIGNUP_CONFIG.username} />
          <Input {...SIGNUP_CONFIG.email} />
          <Input {...SIGNUP_CONFIG.password} />

          <Button type="submit">
            {BUTTON_TEXT.SIGNUP}
          </Button>
          <p className="text-center text-sm mt-4 text-gray-600">
            Already have an account?{" "}
            <Link
              to={ROUTES.login}
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      }
    />
  );
};

export default Signup;
