import { DonationComp } from "@/components/ui/donationComp";
import {  donation } from "@/store/atoms";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useRecoilValue } from "recoil";



export const Dashboard = () => {
  const item = useRecoilValue(donation);
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3000/donate", {
      item
    }).then((res) => {
       setDonations(res.data);
      console.log(res)
    });
  }, [])
  console.log("owncw")
  console.log(donations);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="flex justify-between p-6 font-semibold">
          <div className="flex gap-4">
            <div>HOME</div>
            <div>CONTACT</div>
            <div>COMMUNITY LOGIN</div>
          </div>
          <div className="bg-red-600 px-8 py-3 rounded-xl text-white" onClick={() => {
            navigate("/")
          }} >Logout</div>
        </div>
      </div>
      <div>There are people who love to accept your Products</div>
      <div className=" grid grid-cols-3 grid-rows-3 w-full p-8 gap-5">
        {donations.map((donation) => {
          return <DonationComp need={donation.need} reciever={donation.person} item={donation.item} orgName={donation.Community}/>
        })}
      </div>
    </div>
  );
}