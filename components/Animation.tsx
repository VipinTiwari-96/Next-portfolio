import React, { FC, useMemo } from "react";
import { theme } from "../helper/theme";

const Animation: FC = () => {
  const iconKeys = useMemo(() => Object.keys(theme.icons), []);

  return (
    <div className=" relative animate-scroll-right-to-left ease-linear duration-1000 flex justify-between items-center h-[15rem]">
      {iconKeys.map((key) => {
        const Icon = theme.icons[key];
        return (
          <div className="text-center text-gray-700">
            <Icon size={70} />
            <span>{key}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Animation;
