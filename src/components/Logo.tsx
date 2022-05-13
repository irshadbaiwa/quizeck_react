import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "./LogoIcon";

type Props = {};

const Logo: React.FC = (props) => {
  return (
    <Link to="/" className="inline-block p-2">
      <LogoIcon styleClass="h-10 inline-block mr-2 fill-sky-600" />
      <span className="font-serif text-sky-600 font-semibold text-2xl sm:text-3xl">
        Quizeck!
      </span>
    </Link>
  );
};

export default Logo;
