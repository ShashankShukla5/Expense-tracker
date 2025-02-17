import React from "react";
import Logo from "../../assets/budgeting.png";
import { Button } from "../index";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed w-screen flex justify-between bg-[#eaeaea] h-16 p-1.5 pl-5 items-center top-0">
      <div className="ml-2">
        <img src={Logo} alt="Logo" className="h-[2rem] hover:cursor-pointer" />
      </div>
      <div className="flex gap-3 mr-5">
        <button
          onClick={() => navigate("/login")}
          name="Login"
          className="bg-[#2f3c7e] p-1.5 px-5 rounded-md hover:cursor-pointer hover:underline hover:bg-[#656e9f] transition duration-500"
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="bg-[#2f3c7e] p-1.5 px-5 rounded-md hover:cursor-pointer hover:underline hover:bg-[#656e9f] transition duration-500"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
