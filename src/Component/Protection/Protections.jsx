import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import protection from "../../assets/protection.jpg"
const Protections = () => {
  return (
    <div className="py-16 w-full h-[600px]">
      <div>
        <h1 className="text-purple-700 text-4xl text-center font-bold ">
          How To Protect Yourself
        </h1>
        <p className=" text-slate-400 mb-12 text-center mt-3 mulish-para ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi.
        </p>
      </div>
      <div className=" grid grid-cols-3 pt-10 px-24">
        <div className=" mulish-items text-slate-500">
          <span className=" mulish-footer text-black ">You Should Do</span>
          <ul>
            <li className=" flex mt-7 ">
              <span className=" text-green-600 text-xl mr-4">
                <FaCheckCircle size={18} />
              </span>
              Stay at home
            </li>
            <li className=" flex mt-2">
              <span className=" text-green-600 text-xl mr-4">
                <FaCheckCircle size={18}/>
              </span>
              Wear mask
            </li>
            <li className=" flex mt-2">
              <span className=" text-green-600 text-xl mr-4">
                <FaCheckCircle size={18} />
              </span>
              Use Sanitizer
            </li>
            <li className=" flex mt-2">
              <span className=" text-green-600 text-xl mr-4">
                <FaCheckCircle size={18}/>
              </span>
              Disinfect your home
            </li>
            <li className=" flex mt-2">
              <span className=" text-green-600 text-xl mr-4">
                <FaCheckCircle size={18}/>
              </span>
              Wash your hands
            </li>
            <li className=" flex mt-2">
              <span className=" text-green-600 text-xl mr-4">
                <FaCheckCircle size={18}/>
              </span>
              Frequent self-isolation
            </li>
          </ul>
        </div>
        <div className=" mulish-items text-slate-500 ">
          <span className=" mulish-footer text-black">You should avoid</span>
          <ul>
            <li className=" flex mt-7 ">
              <span className=" text-red-600 text-xl mr-4">
                <MdCancel size={18}/>
              </span>
              Avoid infected people
            </li>
            <li className=" flex mt-2">
              <span className=" text-red-600 text-xl mr-4">
                <MdCancel size={18}/>
              </span>
              Avoid onimats
            </li>
            <li className=" flex mt-2">
              <span className=" text-red-600 text-xl mr-4">
                <MdCancel size={18}/>
              </span>
              Avoid handshakes
            </li>
            <li className=" flex mt-2">
              <span className=" text-red-600 text-xl mr-4">
                <MdCancel size={18}/>
              </span>
              Disinfect your home
            </li>
            <li className=" flex mt-2">
              <span className=" text-red-600 text-xl mr-4">
                <MdCancel size={18}/>
              </span>
              Avoid touching your face
            </li>
            <li className=" flex mt-2">
              <span className=" text-red-600 text-xl mr-4">
                <MdCancel size={18}/>
              </span>
              Avoid effected surface
            </li>
          </ul>
        </div>
        <div className="w-[420px]">
            <img src={protection}/>
        </div>
      </div>
    </div>
  );
};

export default Protections;
