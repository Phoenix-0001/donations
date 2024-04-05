import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUpComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80 border-2 px-5 py-7 shadow-lg">
        <h2 className="text-2xl font-bold mb-3">SIGN UP</h2>
        <p className="text-sm mb-3">Enter your details</p>
        <div className="mb-4">
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            className="border-2 w-full py-1 px-2"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            className="border-2 w-full py-1 px-2"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

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

        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          onClick={async () => {
            await axios
              .post("http://localhost:3000/signup", {
                firstName,
                lastName,
                email,
                password,
              })
              .then((res) => {
                console.log(res);
                if (res.status === 200) navigate("/firstInter")
              });
          }}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};
