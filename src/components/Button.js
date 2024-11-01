// components/Button.js
const Button = ({ children }) => {
  return (
    <button className="bg-darkYellow text-white font-semibold py-2 px-4 rounded shadow hover:bg-brightYellow transition">
      {children}
    </button>
  );
};

export default Button;
