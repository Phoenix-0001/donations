import { donation } from "@/store/atoms";
import { useRecoilValue } from "recoil";

export const DonationComp = ({ reciever, item, orgName, need }) => {
  const demoMail = "community@gmail.com";
  const donations = useRecoilValue(donation) || "laptop";
  return (
    <div className="bg-gray-300  h-[360px] shadow-inner rounded-xl p-4 border-[1px] border-gray-400">
      <div className="bg-gray-500 w-full h-3/5 rounded-xl"></div>
      <div className="mt-[10px] text-slate-600">
        <div>Reciever: {reciever}</div>
      <div>item : {item}</div>
        <div>orgName : {orgName}</div>
        <div>need : {need}</div>
      <div className="ml-[385px]">
          <a className="rounded-full bg-slate-600 hover:bg-slate-700 transition-all px-5 py-2 text-white" href={`mailto:${demoMail}?subject=I%20would%20like%20to%20donate%20to ${donations}`} >
          connect
        </a>
      </div>
      </div>
      
    </div>
  );
};
