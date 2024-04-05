import { useState } from "react";

export const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center align-middle mt-96">
      <div className="w-1/5 border-2 px-5 pt-7 pb-5">
        SIGN IN
        <div className="pt-1">Enter your details</div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between w-full">
            NAME
            <input
              type="email"
              className="border-2 w-4/5"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="flex flex-row justify-between w-full">
            Email
            <input
              type="password"
              className="border-2 w-4/5"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-row  justify-between w-25">
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
};
