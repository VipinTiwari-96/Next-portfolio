import React, { FC } from "react";
// components
import Header from "../components/Header";
import Animation from "../components/Animation";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Index: FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Animation />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
