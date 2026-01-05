import { BRANDING } from "../../config/branding.config";
import { COLOR_MAP } from "../../config/colorMap.config";


export default function Button({
  children,
  variant = "primary",   // primary | outline
  className = "",
  ...props
}) {
  const themeColor = BRANDING.colors.primary; // "purple"
  const colorClass = COLOR_MAP[themeColor]?.[variant];

  return (
    <button
      {...props}
      className={`w-full py-2 rounded-lg font-medium
      transition text-white
      ${colorClass}
      ${className}`}
    >
      {children}
    </button>
  );
}
