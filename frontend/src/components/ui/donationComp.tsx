export const DonationComp = ({reciever,item,orgName,need}) => {
  return (
    <div className="bg-gray-900  h-[360px] shadow-inner rounded-xl p-4 border-[1px] border-gray-400">
      <div className="mt-[180px] text-white">
        <div>Reciever: {reciever}</div>
      <div>{item}</div>
        <div>{orgName}</div>
        <div>{need}</div>
      <div className="ml-[385px]">
        <button className="rounded-full bg-gradient-to-r from-indigo-500 to-emerald-300 hover:bg-green-700 px-5 py-2 text-white">
          connect
        </button>
      </div>
      </div>
      
    </div>
  );
};
