import React, { FC, useMemo } from "react";
import { theme } from "../helper/theme";

const Animation: FC = () => {
  const iconKeys = useMemo(
    () =>
      Object.keys(theme.icons).filter(
        (key) => !["email", "whatsApp", "linkedin"].includes(key)
      ),
    []
  );

  return (
    <div className=" h-[15rem] animate-scroll-right-to-left flex justify-between items-center ">
      {iconKeys.map((key) => {
        const Icon = theme.icons[key];
        return (
          <div className="text-center text-gray-700">
            <Icon className="w-10 h-10 lg:w-16 lg:h-16" />
            <span
              className={`text-[${theme.text.size.phone}] lg:text-[${theme.text.size.laptop}]`}
            >
              {key}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Animation;
