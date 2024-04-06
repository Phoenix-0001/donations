import {  useNavigate } from "react-router-dom";


export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-between p-6 font-semibold">
        <div className="flex gap-4">
          <div>HOME</div>
          <div>CONTACT</div>
          <div>COMMUNITY LOGIN</div>
        </div>
        <div>FAQ</div>
      </div>
      <div className="flex justify-center">
      <div className="flex justify-center flex-col ]">
        <div className= " flex justify-center flex-col w-[1100px] pl-[45px]">
          <div className="text-9xl font-semibold mt-[150px]">
            SERVICE'S <span className="text-green-500">NAME</span>{" "}
            </div>
            <div className="flex justify-center">
          <div className="w-3/5 text-center mt-6 text-gray-500">
            "Let your treasures of yesterday become the blessings of tomorrow.
            Donate today, and watch your old belongings weave new stories in the
            tapestry of others' lives."
              </div>
            </div>
        </div>
        <div className="flex gap-11 ml-[385px] mt-9">
          <button
            className="px-7 py-3 bg-green-500 rounded-full font-semibold hover:bg-green-600 transition-all hover:text-white"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
          <button
            className="px-7 py-2 border-4 border-green-500 rounded-full  hover:bg-green-500 font-semibold transition-all hover:text-white"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign In
          </button>
        </div>
        </div>
      </div>
      <div>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 590"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#7bdcb5"></stop>
              <stop offset="95%" stop-color="#00d084"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,600 L 0,150 C 95.92344497607655,163.26315789473685 191.8468899521531,176.5263157894737 286,164 C 380.1531100478469,151.4736842105263 472.53588516746413,113.15789473684212 581,116 C 689.4641148325359,118.84210526315788 814.0095693779905,162.84210526315786 896,161 C 977.9904306220095,159.15789473684214 1017.4258373205741,111.47368421052632 1101,102 C 1184.5741626794259,92.52631578947368 1312.287081339713,121.26315789473685 1440,150 L 1440,600 L 0,600 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stop-color="#7bdcb5"></stop>
              <stop offset="95%" stop-color="#00d084"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,600 L 0,350 C 89.79904306220098,368.5837320574162 179.59808612440196,387.1674641148325 280,380 C 380.40191387559804,372.8325358851675 491.4066985645933,339.9138755980861 600,334 C 708.5933014354067,328.0861244019139 814.7751196172248,349.17703349282294 899,349 C 983.2248803827752,348.82296650717706 1045.4928229665072,327.37799043062205 1132,324 C 1218.5071770334928,320.62200956937795 1329.2535885167463,335.311004784689 1440,350 L 1440,600 L 0,600 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
      </div>
    </div>
  );
};
