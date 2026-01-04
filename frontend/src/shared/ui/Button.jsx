import { BRANDING } from "../../config/branding.config";

export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`w-full py-2 rounded-lg font-medium
      bg-${BRANDING.colors.primary}-600
      hover:bg-${BRANDING.colors.primary}-700
      text-white transition
      ${className}`}
    >
      {children}
    </button>
  );
}
