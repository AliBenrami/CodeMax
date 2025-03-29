import { useState } from "react";
import Logo from "../../public/Logo.png";
import GoogleLogo from "../../public/Google-Symbol.png";
import { Button } from "react-bootstrap";

const Decoration = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => {
  return (
    <div className={"h-[930px] relative "}>
      <div className="bg-miscellaneous-button-disabeld-bg rounded-[50px] w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%]"></div>
      <div
        className="bg-[#d9d9d9] w-[25.5%] h-[12.53%] absolute right-[74.43%] left-[0.07%] bottom-[87.45%] top-[0.02%]"
        style={{
          transformOrigin: "0 0",
          transform: "rotate(0.22deg) scale(1, 1)",
        }}
      ></div>
      <div className="bg-[#ffffff] w-[19.33%] h-[17.7%] absolute right-[80.67%] left-[0%] bottom-[82.3%] top-[0%]"></div>
      <div className="bg-[#dddddd] w-[9.67%] h-[18.86%] absolute right-[90.33%] left-[0%] bottom-[74.8%] top-[6.34%]"></div>
      <div
        className="bg-[#d9d9d9] w-[25.5%] h-[12.53%] absolute right-[4.8%] left-[69.7%] bottom-[0.05%] top-[87.42%]"
        style={{
          transformOrigin: "0 0",
          transform: "rotate(0.22deg) scale(1, 1)",
        }}
      ></div>
      <div className="bg-[#ffffff] w-[19.33%] h-[17.7%] absolute right-[0%] left-[80.67%] bottom-[0%] top-[82.3%]"></div>
      <div className="bg-[#dddddd] w-[9.67%] h-[18.86%] absolute right-[0%] left-[90.33%] bottom-[6.2%] top-[74.94%]"></div>
    </div>
  );
};

const Login = () => {
  return (
    <div className=" w-screen h-screen  flex justify-center items-center">
      <Decoration className="!w-[500px] !h-[750px] !absolute !left-[710px] !top-[165px]"></Decoration>
      <div className=" w-[500px] h-[750px] flex flex-col items-center bg-[#3D3D41] rounded-[50px] pt-[70px]">
        <img src={Logo} className=" w-[400px] h-[400px]"></img>
        <Button variant="light" className=" w-[225px] text-[24px]">
          <div className=" flex flex-row justify-center items-center">
            <img className=" w-[45px] h-[25px]" src={GoogleLogo}></img>
            Google Login
          </div>
        </Button>
      </div>
    </div>
  );
};
export default Login;
