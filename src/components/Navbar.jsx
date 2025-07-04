import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <span>The Ultimate Wine Guide</span>
      <div>
        <Link to={"/guide"}>Guide</Link>
        <Link to={"/"}>Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
