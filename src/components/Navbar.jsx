import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken, loggedIn, setLoggedIn } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const handleNavigation = (path, id = null) => {
    if (id) {
      navigate("/", { replace: true });
      setTimeout(() => {
        const element = document.getElementById(id);
        element && element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(path);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [token, setLoggedIn]);

  const Dropdown = ({ handleLogout, navigate }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
      <div
        className="relative p-1.5 md:p-2 bg-acadia rounded-md md:rounded-lg border border-acadia-2 shadow-lg"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <img className="h-3 md:h-5" src={assets.tab_icon} alt="tab button" />
        {isDropdownOpen && (
          <div className="absolute right-0 z-10 mt-1 w-32 p-1 bg-acadia rounded-lg shadow-lg">
            <ul>
              <li
                onClick={() => handleNavigation("/")}
                className="block md:hidden text-sm md:text-base px-3 py-1 md:px-4 md:py-2 text-offwhite hover:bg-acadia-2 hover:rounded-t-lg"
              >
                Home
              </li>
              <li
                onClick={() => handleNavigation("/", "menu")}
                className="block md:hidden text-sm md:text-base px-3 py-1 md:px-4 md:py-2 text-offwhite hover:bg-acadia-2"
              >
                Menu
              </li>
              <li
                onClick={() => navigate("/how-to")}
                className="block md:hidden text-sm md:text-base px-3 py-1 md:px-4 md:py-2 text-offwhite hover:bg-acadia-2"
              >
                How to Order
              </li>
              <li
                onClick={() => handleNavigation("/", "contact")}
                className="block md:hidden text-sm md:text-base px-3 py-1 md:px-4 md:py-2 text-offwhite hover:bg-acadia-2"
              >
                Contact
              </li>
              <hr className="block md:hidden m-1 border-t border-acadia-2" />
              <li
                onClick={() => navigate("/myorders")}
                className="text-sm md:text-base px-3 py-1 md:px-4 md:py-2 text-offwhite hover:bg-acadia-2 hover:md:rounded-t-lg"
              >
                Orders
              </li>
              <li
                onClick={handleLogout}
                className="text-sm md:text-base px-3 py-1 md:px-4 md:py-2 text-offwhite hover:bg-acadia-2 hover:rounded-b-lg"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative shadow-lg">
      <div className="absolute inset-0 bg-acadia bg-opacity-70"></div>
      <div className="flex justify-center items-center w-full">
        <div className="relative w-10/12 md:w-5/6 md:mx-auto text-offwhite flex items-center justify-between p-1 md:p-2">
          <Link to="/">
            <img
              className="h-14 md:h-20 rounded-lg lg:mx-5"
              src={assets.logo}
              alt="logo"
            />
          </Link>
          <ul className="hidden md:flex gap-2 space-x-6 lg:space-x-10 text-xl">
            <button onClick={() => handleNavigation("/")}>Home</button>
            <button onClick={() => handleNavigation("/", "menu")}>Menu</button>
            <Link to="/how-to">How to Order</Link>
            <button onClick={() => handleNavigation("/", "contact")}>
              Contact
            </button>
          </ul>
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="relative">
              <Link to="/cart">
                <img
                  className="h-7 md:h-9"
                  src={assets.basket_icon}
                  alt="basket"
                />
              </Link>
              {getTotalCartAmount() > 0 && (
                <div className="absolute top-1 right-0 bg-red-500 rounded-full w-1.5 h-1.5 md:w-2 md:h-2"></div>
              )}
            </div>
            {!loggedIn ? (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-acadia text-offwhite py-1 px-3 rounded-lg border border-acadia-2 hover:border-gainsboro"
              >
                Sign In
              </button>
            ) : (
              <Dropdown handleLogout={logout} navigate={navigate} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
