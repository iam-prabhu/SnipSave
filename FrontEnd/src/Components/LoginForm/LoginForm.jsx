import "./LoginForm.css";
import react from "react";
import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/auth/login", {
        email,
        password,
      });
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        console.log("Token saved:", response.data.token);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err);
    }
  };

  return (
    <>
      <div className="login-wrapper flex items-center justify-center w-full min-h-screen bg-cover bg-center">
        <div className="bg-gray-800  p-10 rounded-lg shadow-lg z-50">
          <h2 className="text-white text-3xl font-bold mb-10 text-center">
            Welcome Back
          </h2>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="you@yourmail.com"
                onChange={(e) => setemail(e.target.value)}
                className="w-full p-5 rounded-full border border-white bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-10">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                className=" w-96 p-5 rounded-full border border-white bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="p-8 bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Login &gt;
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
