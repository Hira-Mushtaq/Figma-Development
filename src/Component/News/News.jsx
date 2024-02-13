import React from "react";
import women_corona from "../../assets/women_corona.jpg";
import women_working from "../../assets/women_working.jpg";
import { DiChrome } from "react-icons/di";

const News = () => {
  return (
   <div className="py-12">
      <div>
        <h1 className="text-purple-700 text-4xl text-center font-bold ">News And Articles</h1>
        <p className=' text-slate-400 mb-12 text-center mt-3 mulish-para '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.<br/>Lorem  consectetur adipiscing elit</p>
      </div>
       <div className=" flex justify-center py-6">
      <div className=" relative">
        <img className=" w-[350px]" src={women_corona} />
        <div className=" bg-purple-700 w-36 h-10 text-center pt-2 absolute bottom-[75px] left-1/2 transform -translate-x-1/2 py-2 px-4">
          <span className=" text-white ">5 Dec. 2021</span>
        </div>
        <div className=" flex justify-center">
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-2"><DiChrome size={25} /></h5>
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-10">ADMIN</h5>
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-2"><DiChrome size={25} /></h5>
       <h5 className="text-slate-400 mt-6 pt-2.5">2 Comments</h5>
       </div>
        <h1 className="text-purple-700 text-xl font-bold text-center mt-2">
          How coronavirus very contigous
        </h1>
      </div>
      <div className=" px-6 relative">
        <img className=" w-[350px]" src={women_working} />
        <div className=" bg-purple-700 w-36 h-10 text-center pt-2 absolute bottom-[75px] left-1/2 transform -translate-x-1/2 py-2 px-4">
          <span className=" text-white">10 Dec. 2021</span>
        </div>
        <div className=" flex justify-center">
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-2"><DiChrome size={25} /></h5>
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-10">ADMIN</h5>
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-2"><DiChrome size={25} /></h5>
       <h5 className="text-slate-400 mt-6 pt-2.5">5 Comments</h5>
       </div>
        <h1 className="text-purple-700 text-xl font-bold text-center mt-2">
          How coronavirus very contigous
        </h1>
      </div>
      <div className=" relative ">
        <img className=" w-[350px]" src={women_corona} />
        <div className=" bg-purple-700 w-36 h-10 text-center pt-2 absolute bottom-[75px] left-1/2 transform -translate-x-1/2 py-2 px-4">
          <span className=" text-white">5 Dec. 2021</span>
        </div>
        <div className=" flex justify-center">
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-2"><DiChrome size={25} /></h5>
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-10">ADMIN</h5>
       <h5 className="text-slate-400 mt-6 pt-2.5 pr-2"><DiChrome size={25} /></h5>
       <h5 className="text-slate-400 mt-6 pt-2.5">2 Comments</h5>
       </div>
        <h1 className="text-purple-700 text-xl font-bold text-center mt-2">
          How coronavirus very contigous
        </h1>
      </div>
    </div>
    </div>
  );
};

export default News;
