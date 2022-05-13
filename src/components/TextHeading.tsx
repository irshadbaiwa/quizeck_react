import React, { Children } from "react";

type Props = {
  styleClass?: string | undefined;
  children: React.ReactNode;
};

const TextHeading: React.FC<Props> = ({ styleClass, children }) => {
  return (
    <h1 className={"text-center font-semibold text-sky-600 " + styleClass}>
      {children}
    </h1>
  );
};

export default TextHeading;
