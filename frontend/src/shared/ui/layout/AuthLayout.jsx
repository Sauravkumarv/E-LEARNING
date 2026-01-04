import { BRANDING } from "../../../config/branding.config";


export default function AuthLayout({ left, right }) {
  return (
    <div className="min-h-screen flex">
      
      {/* LEFT AI PANEL */}
      <div
        className={`hidden lg:flex w-2/5 
        bg-gradient-to-br ${BRANDING.gradients.auth}
        text-white p-12`}
      >
        {left}
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="flex w-full lg:w-3/5 items-center justify-center bg-gray-50">
        {right}
      </div>

    </div>
  );
}
