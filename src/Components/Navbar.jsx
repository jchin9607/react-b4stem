import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [offPage, setOffPage] = useState(false);

  useEffect(() => {
    if (location.pathname === "/hack") {
      setOffPage(true);
    } else {
      setOffPage(false);
    }
  }, [location.pathname]);

  return (
    <div className="fixed h-[60px] w-full text-white flex justify-between items-center text-sm px-[15%] z-10 bg-black md:text-2xl">
      <Link to="/">B4STEM</Link>
      {offPage ? null : (
        <nav className="flex gap-8 ">
          <a href="#home" className="hover:text-purple-500 z-10">
            Home
          </a>
          <a href="#about" className="hover:text-purple-500">
            About
          </a>
          <a href="#team" className="hover:text-purple-500">
            Team
          </a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
