import { AUTH_UI } from "../../../config/authConfig";
import { BRANDING } from "../../../config/branding.config";

export default function AuthLeftPanel() {
  const { title, highlight, subtitle, footer } = AUTH_UI.leftPanel;

  return (
    <div className="flex flex-col justify-between h-full">
      
      <div>
        <h1 className="text-4xl font-extrabold leading-tight">
          {title}
          <br />
          <span className="text-yellow-300">{highlight}</span>
        </h1>

        <p className="mt-6 text-sm text-white/80">
          {subtitle}
        </p>
      </div>

      <p className="text-xs text-white/70">
        {footer}
      </p>

    </div>
  );
}
