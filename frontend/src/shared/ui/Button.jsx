export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
    >
      {children}
    </button>
  );
}
