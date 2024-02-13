import React from "react";
import covid from "../../assets/covid.jpg";

const Syptoms = () => {
  return (
    <div className="py-12 bg-fuchsia-50 w-full h-[800px]">
      <div>
        <h1 className="text-purple-700 text-4xl text-center font-bold ">
          Symptoms of Coronavirus
        </h1>
        <p className=" text-slate-400 mb-12 text-center mt-3 mulish-para ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="  grid grid-cols-2 grid-rows-2 gap-2 ml-10">
        <div className=" bg-white w-[540px] h-[170px] mt-6  shadow-2xl ml-8">
          <div className=" flex gap-6 items-center mt-4">
            <div className="w-[80px] ml-4">
              <img src={covid} />
            </div>
            <div>
              <h2 className="text-purple-700 font-bold mulish-footer  mt-4 ">
                High Fever
              </h2>
              <p className=" w-[400px] mulish-para text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white w-[540px] h-[170px]  mt-6 mr-8 shadow-2xl">
          <div className=" flex gap-6 items-center mt-4">
            <div className="w-[80px] ml-4">
              <img src={covid} />
            </div>
            <div>
              <h2 className="text-purple-700 font-bold mulish-footer   mt-4 ">
              Cough
              </h2>
              <p className=" w-[400px] mulish-para text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white w-[540px] h-[170px]  mt-6 ml-8 shadow-2xl">
          <div className=" flex gap-6 items-center mt-4">
            <div className="w-[80px] ml-4">
              <img src={covid} />
            </div>
            <div>
              <h2 className="text-purple-700 font-bold mulish-footer   mt-4 ">
              Sore Troath
              </h2>
              <p className=" w-[400px] mulish-para text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white w-[540px] h-[170px] mt-6 mr-8 shadow-2xl">
          <div className=" flex gap-6 items-center mt-4">
            <div className="w-[80px] ml-4">
              <img src={covid} />
            </div>
            <div>
              <h2 className=" font-bold mulish-footer text-purple-700  mt-4 ">
              Headache
              </h2>
              <p className=" w-[400px] mulish-para text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly my-20 mx-48 gap-10 ">
        <p className="mulish-para text-slate-400">
          <span className=" text-purple-700">Stay at home and call your doctor:</span> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className=" px-8 py-3 mb-10 ml-10 bg-purple-700 text-white rounded-full">
          HELPLINE
        </button>
      </div>
    </div>
  );
};

export default Syptoms;
