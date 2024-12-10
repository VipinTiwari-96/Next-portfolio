import React, { FC, useMemo } from "react";
// shared
import Link from "./shared/Link";

type Project = {
  name: string;
  link: string;
  img: string;
};
const Projects: FC = () => {
  const projects = useMemo<Project[]>(() => {
    return [
      {
        name: "Todo app",
        link: "https://yestodo.netlify.app/",
        img: "https://i.ibb.co/ZX214mn/Screenshot-53.png",
      },
      {
        name: "E-commerce site",
        link: "https://my-easykart.netlify.app",
        img: "https://i.ibb.co/KqfzdJB/Screenshot-55.png",
      },
      {
        name: "Expense-Tracker",
        link: "https://xpense-xtracker.netlify.app/",
        img: "https://i.ibb.co/JF62BFG/Screenshot-42.png",
      },
      {
        name: "Tic-tic-toe",
        link: "https://play-tic-tac.netlify.app",
        img: "https://i.ibb.co/Hp4S9cq/Screenshot-34.png",
      },
      {
        name: "Tip-calculator",
        link: "https://vipin-tip-calculator.netlify.app",
        img: "https://i.ibb.co/vqY9PQF/Screenshot-37.png",
      },
      {
        name: "Pomo-doro app",
        link: "https://vipin-pomodoro.netlify.app/",
        img: "https://i.ibb.co/djZgH2H/Screenshot-from-2024-12-09-17-03-59.png",
      },
    ];
  }, []);

  return (
    <div className="bg-gray-100 p-20 ">
      <div className=" w-4/5  mx-auto   grid grid-cols-1 lg:grid-cols-2 gap-20">
        {projects.map((proj) => (
          <div className=" border border-gray-200 p-5 rounded-md bg-white flex flex-col gap-5 items-center cursor-pointer ">
            <img
              src={proj.img}
              alt=""
              className="w-full h-full border p-1 bg-gray-100 rounded-md hover:shadow-md hover:shadow-gray-400"
            />
            <Link link={proj.link} name={proj.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
