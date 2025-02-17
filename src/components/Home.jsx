import React from "react";
import Homeimg from "../assets/expense.jpg";
import Header from "./header/Header";

function Home() {
  return (
    <div>
      <Header />
      <section id="home" className="h-screen">
      <div className="flex justify-between items-center bg-white mt-28 mx-6 h-[70vh]">
        <div className="ml-36 mt-[-8rem] font-[Roboto_Mono] w-[40%]">
          <h1 className="text-black text-4xl">
            Managing Expenses has never been easier
          </h1>
          <div className="flex mt-14 items-center border-b-2 border-black pb-1 w-fit">
            <p className="text-black mr-20">Sign Up to try out</p>
            <p className="ml-2 font-bold text-2xl text-black">
              →
            </p>
          </div>
        </div>
        <div className=" bg-amber-200">
          <img src={Homeimg} alt="Image" className="h-[25rem]" />
        </div>
      </div>
    </section>
    </div>
    
  );
}

export default Home;
