import React, { FC, useEffect, useState } from "react";
// helper
import { theme } from "../helper/theme";

const Footer: FC = () => {
  const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false);
  const [isNumberCopied, setIsNumberCopied] = useState<boolean>(false);

  const handleEmailCopy = () => {
    setIsEmailCopied(true);
    navigator.clipboard.writeText(" vipinvipin1997vipin@gmail.com");
  };

  const handleNumberCopy = () => {
    setIsNumberCopied(true);
    navigator.clipboard.writeText("9634963546");
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsEmailCopied(false);
      setIsNumberCopied(false);
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isEmailCopied, isNumberCopied]);

  return (
    <div className="bg-gray-100 border-t-2 rounded-t-[90px] p-20 mt-40">
      <div className="w-2/3 mx-auto  text-center h-[15rem] flex flex-col gap-20">
        <div className="text-xl lg:text-3xl font-semibold text-gray-700">
          Get in touch with me
        </div>

        <div
          className={`lg:w-1/2 mx-auto flex flex-col items-center gap-5 text-[12px] xl:text-[16px]`}
        >
          <div className="flex  w-full justify-between flex-wrap items-center gap-2">
            <theme.icons.email className="w-5 h-5 lg:w-8 lg:h-8" />
            <span className="flex gap-5 items-center">
              <span className="relative ">
                <span
                  className={`relative z-10 ${isEmailCopied && "text-white"}`}
                >
                  vipinvipin1997vipin@gmail.com
                </span>
                {isEmailCopied && (
                  <div className="w-60 h-6 absolute top-0 animate-fillBg bg-blue-500  rounded-sm "></div>
                )}
              </span>
              <span
                className="bg-white p-1 rounded-md cursor-pointer w-16"
                onClick={handleEmailCopy}
              >
                {isEmailCopied ? "copied!" : "copy"}
              </span>
            </span>
          </div>
          <div className="flex  w-full justify-between flex-wrap items-center gap-2">
            <theme.icons.whatsApp className="w-5 h-5 lg:w-8 lg:h-8" />
            <span className="flex gap-5 items-center">
              <span className="relative ">
                <span
                  className={`relative z-10 ${isNumberCopied && "text-white"}`}
                >
                  9634963546
                </span>
                {isNumberCopied && (
                  <div className="w-60 h-6 absolute top-0 animate-fillBg bg-blue-500 rounded-sm"></div>
                )}
              </span>
              <span
                className="bg-white p-1 rounded-md cursor-pointer w-16"
                onClick={handleNumberCopy}
              >
                {isNumberCopied ? "copied!" : "copy"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
