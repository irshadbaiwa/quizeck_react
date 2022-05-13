import React from "react";
import LogoIcon from "./LogoIcon";
import "./loadingAnimation.css";

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <LogoIcon styleClass="h-20 sm:h-24 block fill-sky-600 loader" />
    </div>
  );
};

export default Loading;
