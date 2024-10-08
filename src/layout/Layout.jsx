import React from "react";
import { Outlet, Link } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <nav >
        <ul className="flex items-center justify-around text-white bg-blue-350">
          <Link to="/">
            <li className="link">To-Do-List</li>
          </Link>
          <Link to="/about">
            <li className="link">About this To-Do-List</li>
          </Link>
          
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
