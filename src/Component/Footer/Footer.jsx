import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" bg-fuchsia-50 w-full h-[350px]">
      <div className=" grid grid-cols-4 gap-4 pl-20 pt-16">
        <div>
          <h3 className=" text-black font-extrabold mulish-footer ">About</h3>
          <p className=" mulish-footer-i  font-extralight w-[300px] text-slate-500 mt-6">
            Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur do eiusmod tempor incididunt ut labore
          </p>
          <ul className=" flex text-3xl gap-6 mt-12 ml-3 text-purple-700">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <IoLogoYoutube />
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-extrabold mulish-footer ml-20">Quick Links</h3>
          <ul className=" mulish-items text-purple-700 ml-20 mt-6 ">
            <li className="mb-2">Symptoms</li>
            <li className="mb-2">Prevention</li>
            <li className="mb-2">FAQs</li>
            <li className="mb-2">About coronavirus</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div> 
        <h3 className="text-black font-extrabold mulish-footer ml-20">Helpful Links</h3>
          <ul className=" mulish-items text-purple-700 ml-20 mt-6 ">
            <li className="mb-2">HealthCare professionals</li>
            <li className="mb-2">LGU facilities</li>
            <li className="mb-2">Protect your family</li>
            <li >World health</li>
          </ul>
        </div>
        <div>
        <h3 className="text-black font-extrabold mulish-footer ml-20">Resources</h3>
          <ul className=" mulish-items text-purple-700 ml-20 mt-6 ">
            <li className="mb-2">WHO website</li>
            <li className="mb-2">CDC website</li>
            <li className="mb-2">GOV website</li>
            <li >DOH website</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
