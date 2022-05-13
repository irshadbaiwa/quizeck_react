import React, { useState } from "react";
import Logo from "./Logo";
import MenuToggler from "./MenuToggler";
import NavLarge from "./NavLarge";
import NavSmall from "./NavSmall";

const Header: React.FC = () => {
  // Menu
  const [open, setOpen] = useState(false);

  // Tailwind utility classes
  // for styling
  const [headerClass, setHeaderClass] = useState([
    "w-screen",
    "min-h-fit",
    "flex",
    "flex-col",
    "justify-center",
    "px-6",
    "py-1",
    "sm:bg-transparent",
    "transition-all",
  ]);

  /*
  --- This code block is utilised by small screens ---- 
    for toggling navigation menu
  */
  function handleToggle(e: React.MouseEvent): void {
    setOpen((prevState) => {
      if (prevState) {
        // remove white bg from header
        setHeaderClass((prevClass) => {
          return prevClass.filter((className) => className !== "bg-white");
        });
      } else {
        // add white bg to header
        setHeaderClass((prevClass) => {
          return [...prevClass, "bg-white"];
        });
      }
      // flip the boolean
      return !prevState;
    });
  }

  return (
    <header className={headerClass.join(" ")}>
      <div className="flex flex-row justify-between sm:justify-start items-center sm:px-6 py-2">
        <Logo />
        <NavLarge />
        <MenuToggler toggle={handleToggle} open={open} />
      </div>
      {open && <NavSmall />}
    </header>
  );
};

export default Header;
