import { useState } from "react";
export const FirstInterPage = () => {

  const [donateItem, setDonateItem] = useState("");
  return <div>
    <input type="text" onChange={(e) => {
      setDonateItem(e.target.value)
    }}/>
  </div>
}