import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Store</h1>
      <button
        onClick={() => navigate("/register")}
        className="px-4 py-2 bg-blue-500 text-white rounded m-2"
      >
        Register
      </button>
      <button
        onClick={() => navigate("/login")}
        className="px-4 py-2 bg-green-500 text-white rounded m-2"
      >
        Login
      </button>
    </div>
  );
}
