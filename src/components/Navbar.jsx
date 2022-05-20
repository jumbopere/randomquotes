import React from "react";

const Navbar = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6  shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/home"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Life
        </a>
      </div>
      <div className="mb-2 sm:mb-0">
        <a
          href="/home"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          Joker
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
