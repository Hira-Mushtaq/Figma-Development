import React from "react";

export const Header = () => {
  return (
    <div className=" grid grid-cols-2   bg-fuchsia-50 w-full ">
      <div className=" font-bold mulish-font text-2xl pl-24 pt-7">Covid.</div>

      <ul className="flex mulish-items gap-10 pr-24 pt-7 text-slate-400">
        <li>Home</li>
        <li>Reports</li>
        <li>Centers</li>
        <li>About</li>
        <li>Symptoms</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
