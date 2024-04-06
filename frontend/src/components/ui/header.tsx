import { useNavigate } from "react-router-dom";

export const Header = ({ Input }) => {
  const demoMail = "binarybrigade@gmail.com";
  const sub = "something ..."
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between p-6 font-semibold">
        <div className="flex gap-4">
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </div>
          <a
            href={`mailto:${demoMail}?subject=I%20would%20like%20to%20talk%20about ${sub}`}
          >
            CONTACT
          </a>
          <div onClick={() => {
            navigate("/communitylogin")
          }}>COMMUNITY LOGIN</div>
        </div>
        <div
          className={
            Input !== "FAQ" ? "bg-red-600 px-8 py-3 rounded-xl text-white" : ""
          }
          onClick={() => {
            navigate("/");
          }}
        >
          {Input}
        </div>
      </div>
      ;
    </div>
  );
  
}
