import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center align-middle mt-96">
      <div className="w-2/5 border-2 px-5 pt-7 pb-5">
        SIGN IN
        <div className="pt-1">Enter your details</div>
        <div className="flex flex-row">
          NAME
          <input
            type="email"
            className="border-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          Email
          <input
            type="password"
            className="border-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <div>Already have an account?</div>
          <button
            onClick={() => {
              console.log(email);
              console.log(password);
            }}
          >
            create an account
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default App;
