import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignInComponent = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 border-2 px-5 py-7 shadow-lg">
        <h2 className="text-2xl font-bold mb-3">SIGN IN</h2>
        <p className="text-sm mb-3">Enter your details</p>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="border-2 w-full py-1 px-2"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="border-2 w-full py-1 px-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="hover:cursor-pointer text-sky-600 hover:text-blue-700" onClick={() => {
            navigate("/signup")
          }}>Don't have an account?</div>
          <button
            className="w-3/5 bg-green-600 text-white py-2 rounded hover:bg-green-700"
            onClick={async() => {
              axios.post("http://localhost:3000/signin", {
                email,password
              }).then((res) => {
                if (res.status === 200) navigate("/firstInter");
              });
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
