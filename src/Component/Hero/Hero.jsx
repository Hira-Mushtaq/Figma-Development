import React from 'react'
import Hero_img from "../../assets/7311139_3622110-removebg-preview.png";

const Hero = () => {
  return (
    <div className=" flex pt-20 justify-evenly gap-20 bg-fuchsia-50 w-full h-[470px] rounded-br-full ">
        <div >
          <h5 className=" text-purple-700 mb-3">COVID-19 AWARENESS</h5>
          <h1 className=" text-purple-700 text-5xl font-black mb-8">
            Stay Safe. Stay Home.
          </h1>
          <p className="text-slate-400 mb-12 w-[450px] mulish-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <button className=" px-8 py-3 mb-10 bg-purple-700 text-white rounded-full">
            How to Prevent
          </button>
        </div>
        <div className=" w-[400px] bg-transparent pr-8  ">
          <img className='' src={Hero_img} />
        </div>
      </div>
  )
}

export default Hero