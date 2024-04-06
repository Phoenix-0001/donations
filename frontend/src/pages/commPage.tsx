import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

export const CommunityPage = () => {
  const [person,setPerson] = useState("")
  const [item,setItem] = useState("")
  const [need, setNeed] = useState("");
  return (
    <div className="flex justify-center align-middle mt-[300px]">
      <div className="w-2/5 border-[1px] p-9 rounded-xl flex flex-col gap-4">
        <div className="text-3xl font-medium">Generate Request</div>
        <div className="">
          <div>Benefacticary</div>
          <Input
            type="name"
            placeholder="Occupation( no PII to be provided )"
            onChange={(e) => {
              setPerson(e.target.value);
            }}
          />
        </div>
        <div>
          <div>Request for</div>
          <Input
            type="name"
            placeholder="what do they want?"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>
        <div>
          <div>Need</div>
          <Input
            type="name"
            placeholder="why do they need it?"
            onChange={(e) => {
              setNeed(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="bg-green-500 px-5 py-2 rounded-full font-medium text-white " onClick={async () => {
            await axios.post("http://localhost:3000/reqitem", {
              person,
              item,
              need
            });
          }}>
            Request
          </button>
        </div>
      </div>
    </div>
  );
};
