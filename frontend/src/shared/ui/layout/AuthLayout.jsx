import { BRANDING } from "../../../config/branding.config";

export default function AuthLayout({ left, right }) {
  return (
    <div className="min-h-screen w-full">

      {/* ===== MOBILE VIEW ===== */}
      <div className="lg:hidden flex min-h-screen items-center justify-center px-4 bg-gray-50">
        <div className="w-full max-w-md">
          {right}
        </div>
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      <div className="hidden lg:grid min-h-screen grid-cols-2">

        {/* LEFT BRAND CONTENT */}
        <div className="flex items-center justify-center px-12
          bg-gradient-to-br
          from-[#160022] via-[#2a0845] to-[#120018]
          text-white"
        >
          <div className="w-full max-w-xl">
            {left}
          </div>
        </div>

        {/* RIGHT IMAGE + FORM */}
        <div
          className="flex items-center justify-center bg-cover bg-center relative"
          
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-white/70" />

          {/* form */}
          <div className="relative z-10 w-full max-w-md px-6">
            {right}
          </div>
        </div>

      </div>
    </div>
  );
}
