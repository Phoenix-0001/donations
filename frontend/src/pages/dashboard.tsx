import { DonationComp } from "@/components/ui/donationComp";
import { Header } from "@/components/ui/header";
import {  donation } from "@/store/atoms";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {  useRecoilValue } from "recoil";



export const Dashboard = () => {
  const navigate = useNavigate()
  const item = useRecoilValue(donation);
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3000/donate", {
      item
    }).then((res) => {
       setDonations(res.data);
      if (res.data.length === 0) navigate("/error");
      console.log(res.data)
    })
  }, [])
  console.log(donations);


  return (
    <div>
      <div>
       <Header Input={"Logout"}/>
      </div>
      <div className="text-7xl w-3/5 text-center mx-auto font-semibold mb-8 mt-5">
        There are people who love to accept your <span className="text-green-500">Donations</span>
      </div>
      <div className=" grid grid-cols-3 grid-rows-3 w-full p-8 gap-5">
        {donations.map((donation) => {
          return (
            <DonationComp
              need={donation.need}
              reciever={donation.person}
              item={donation.item}
              orgName={donation.Community}
            />
          );
        })}
      </div>
    </div>
  );
}