import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
const Preventions = () => {
  return (
    <div className=" bg-fuchsia-50 w-full h-[800px]">
        <div className=" flex justify-evenly items-center">
      <div className="  grid grid-cols-2 grid-rows-2 gap-8">
        <div className=" bg-white w-[230px] h-[280px] rounded-2xl mt-12  shadow-2xl">
          <div className=" bg-purple-300 flex w-full h-[120px] rounded-t-2xl text-purple-700 justify-center items-center"><IoMdHome size={50}  /></div>
          <h3 className="text-black font-bold mulish-footer ml-4  mt-4 ">Stay At Home</h3>
          <h5 className=" mulish-items ml-4 mt-2">Ut enim ad minim veniam</h5>
          <h5 className=" mulish-items ml-4 ">Ut enim ad minim veniam</h5>
          <h5 className=" mulish-items ml-4 ">Ut enim ad minim veniam</h5>
        </div>
        <div className=" bg-white w-[230px] h-[280px] rounded-2xl mt-20 shadow-2xl">
          <div className=" bg-purple-300 flex w-full h-[120px] rounded-t-2xl text-purple-700 justify-center items-center"><IoMdHome size={50}  /></div>
          <h3 className="text-black font-bold mulish-footer ml-4  mt-4 ">Stay At Home</h3>
          <h5 className=" mulish-items ml-4 mt-2">Ut enim ad minim veniam</h5>
          <h5 className=" mulish-items ml-4 ">Ut enim ad minim veniam</h5>
          <h5 className=" mulish-items ml-4 ">Ut enim ad minim veniam</h5>
        </div>
        <div className=" bg-white w-[230px] h-[280px] rounded-2xl shadow-2xl">
          <div className=" bg-purple-300 flex w-full h-[120px] rounded-t-2xl text-purple-700 justify-center items-center"><IoMdHome size={50}  /></div>
          <h3 className="text-black font-bold mulish-footer ml-4  mt-4 ">Stay At Home</h3>
          <h5 className=" mulish-items ml-4 mt-2">Ut enim ad minim veniam</h5>
          <h5 className=" mulish-items ml-4 ">Ut enim ad minim veniam</h5>
          <h5 className=" mulish-items ml-4 ">Ut enim ad minim veniam</h5>
        </div>
        <div className=" bg-white w-[230px] h-[280px] rounded-2xl mt-8 shadow-2xl">
          <div className=" bg-purple-300 flex w-full h-[120px] rounded-t-2xl text-purple-700 justify-center items-center"><IoMdHome size={50}  /></div>
          <h3 className="text-black font-bold mulish-footer ml-4  mt-4 ">Stay At Home</h3>
          <h5 className=" mulish-items ml-4 mt-2">Ut enim ad minim veniam</h5>
          <h5 className=" mulish-items ml-4 ">Ut enim ad minim veniam</h5>
          <h5 className=" mulish-items ml-4 ">Ut enim ad minim veniam</h5>
        </div>
      </div>
      <div>
        <h1 className="text-purple-700 text-3xl font-bold mt-10">
          How To Prevent Coronavirus?
        </h1>
        <p className=" w-[460px]  mt-7 text-slate-500 pb-5 mulish-para font-medium">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p className=" flex mt-3">
          <span className=" text-purple-700 text-xl">
            <FaCheckCircle />
          </span>
          <span className=" text-slate-500 ml-4 mulish-para font-medium">
            Ut enim ad minim veniam
          </span>
        </p>
        <p className=" flex mt-5">
          <span className=" text-purple-700 text-xl">
            <FaCheckCircle />
          </span>
          <span className=" text-slate-500 ml-4 mulish-para font-medium">
            Lorem ipsum dolor sit amet
          </span>
        </p>
        <p className=" flex mt-5">
          <span className=" text-purple-700 text-xl">
            <FaCheckCircle />
          </span>
          <span className=" text-slate-500 ml-4 mulish-para">
            sed do eiusmod tempor
          </span>
        </p>
        <button className=" px-8 py-3 mb-10 bg-purple-700 text-white rounded-full mt-8">
          READ MORE ABOUT PREVENTION
        </button>
      </div>
      </div>
    </div>
  );
};

export default Preventions;
