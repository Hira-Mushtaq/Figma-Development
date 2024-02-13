import React from "react";
import women_corona from "../../assets/women_corona.jpg";
import women_working from "../../assets/women_working.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";

const Coronavirus = () => {
  return (
    <div>
    <div className=" flex justify-evenly gap-3 mt-10 relative">
      <div>
        <h1 className="text-purple-700 text-3xl font-bold mt-10">
          What Is Coronavirus?
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
          <span className=" text-slate-500 ml-4 mulish-para font-medium">Ut enim ad minim veniam</span>
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
          <span className=" text-slate-500 ml-4 mulish-para">sed do eiusmod tempor</span>
        </p>
        <button className=" px-8 py-3 mb-10 bg-purple-700 text-white rounded-full mt-8">
           LEARN MORE
          </button>
      </div>
      <div className=" w-[490px] mt-14">
        <img src={women_corona} />
        <div className=" bg-purple-700 w-[80px] h-16 text-white  pt-4 pl-7 absolute bottom-[62px]"><IoMdPlay size={30} /></div>
      </div>
    </div>
    <div className=" flex justify-evenly gap-5 relative">
    <div className=" w-[490px]  mt-14">
      <img src={women_working} />
      <div className=" bg-purple-700 w-[80px] h-16 text-white  pt-4 pl-7 left-[41.3%] transform -translate-x-3.5 absolute bottom-[57px]"><IoMdPlay size={30} /></div>
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
        <span className=" text-slate-500 ml-4 mulish-para font-medium">Ut enim ad minim veniam</span>
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
        <span className=" text-slate-500 ml-4 mulish-para">sed do eiusmod tempor</span>
      </p>
      <button className=" px-8 py-3 mb-10 bg-purple-700 text-white rounded-full mt-8">
      LEARN MORE
          </button>
    </div>
    
  </div>
  </div>
  );
};

export default Coronavirus;
