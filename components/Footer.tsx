import React, { FC } from "react";
import { socialLinks, theme } from "../helper/theme";

const Footer: FC = () => {
  return (
    <div className="bg-gray-100 border-t-2 rounded-t-[90px] p-20 mt-40">
      <div className="w-2/3 mx-auto  text-center h-[15rem] flex flex-col gap-20">
        <div className="text-xl lg:text-3xl font-semibold text-gray-700">
          Get in touch with me.
        </div>

        <div
          className={`lg:w-1/2 mx-auto flex flex-col items-center gap-5 text-[${theme.text.size.phone}]`}
        >
          <div className="flex  w-full justify-between flex-wrap items-center gap-2">
            <theme.icons.email size={30} />
            <span>vipinvipin1997vipin@gmail.com</span>
          </div>
          <div className="flex  w-full justify-between flex-wrap items-center gap-2">
            <theme.icons.whatsApp size={30} />
            <span>9634963546</span>
          </div>

          <div className="flex  w-full justify-between flex-wrap items-center gap-2">
            <theme.icons.linkedin size={30} />
            <a
              href={socialLinks.linkedin}
              className="cursor-pointer hover:underline truncate"
              target="_blank"
            >
              {socialLinks.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
