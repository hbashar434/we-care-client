// import React, { useContext } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <div className="mx-8 md:mx-16 lg:mx-24">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content mt-1 p-2 shadow  bg-orange-100 rounded-box w-32"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-700"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-700"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-700"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case text-blue-500 border-none text-lg md:text-3xl font-bold"
          >
            We Care
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">
            <li className=" text-lg font-semibold mr-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg font-semibold mr-6">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-600"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-600"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className=" flex gap-4 items-center">
              <p className="my-btn-blue font-bold text-lg">{user.displayName}</p>
              <Link
                onClick={handleLogOut}
                className="my-btn md:text-lg md:font-semibold normal-case"
              >
                Log Out
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              className="my-btn md:text-lg md:font-semibold normal-case"
            >
              Login Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
