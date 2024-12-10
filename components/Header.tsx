import React, { FC } from "react";
// helper
import { socialLinks } from "../helper/theme";
// shared
import Link from "./shared/Link";

const Header: FC = () => {
  return (
    <div className="bg-gray-100 border-b-2 rounded-b-[90px] h-[40rem] flex flex-col">
      <div className="h-[4rem] flex gap-4 justify-end items-end pr-20">
        <Link link={socialLinks.linkedin} name="Linkedin" />/
        <Link link={socialLinks.github} name="Github" />/
        <Link link={socialLinks.instagram} name="Instagram" />
      </div>

      <div className="m-auto w-2/3 xl:w-1/2 flex flex-col items-center justify-center gap-5 p-4">
        <img
          src="https://i.ibb.co/7QZf5cS/IMG-20211017-203536-111.jpg"
          alt="profile_image"
          className="border rounded-full w-32 h-32"
        />
        <span className="sm:text-3xl xl:text-4xl font-bold text-gray-700 text-wrap text-center w-1/2">
          Experience in building digital projects in React
        </span>
      </div>
    </div>
  );
};

export default Header;
