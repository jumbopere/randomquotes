import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between h-15">
      <Link to="joker" className="h-15 font-bold text-indigo-500 p-2">
        Joker Quotes
      </Link>
      <Link to="/" className="h-15 font-bold text-indigo-500 p-2">
        Life Quotes
      </Link>
    </div>
  );
};

export default Navbar;
