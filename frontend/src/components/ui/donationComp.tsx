import { donation } from "@/store/atoms";
import { useRecoilValue } from "recoil";

export const DonationComp = ({ reciever, item, orgName, need }) => {
  const demoMail = "community@gmail.com";
  const donations = useRecoilValue(donation);
  return (
    <div className="bg-gray-900  h-[360px] shadow-inner rounded-xl p-4 border-[1px] border-gray-400">
      <div className="bg-blue-400 w-full h-3/5 rounded-xl"></div>
      <div className="mt-[10px] text-white">
        <div>Reciever: {reciever}</div>
      <div>{item}</div>
        <div>{orgName}</div>
        <div>{need}</div>
      <div className="ml-[385px]">
          <a className="rounded-full bg-gradient-to-r from-indigo-500 to-emerald-300 hover:bg-green-700 px-5 py-2 text-white" href={`mailto:${demoMail}?subject=I%20would%20like%20to%20donate%20to ${donations}`} >
          connect
        </a>
      </div>
      </div>
      
    </div>
  );
};
