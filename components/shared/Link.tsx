import React, { FC } from "react";

interface LinkProps {
  link: string;
  name: string;
}

const Link: FC<LinkProps> = ({ link, name }) => {
  return (
    <a href={link} target="_blank" className="cursor-pointer hover:underline">
      {name}
    </a>
  );
};

export default Link;
