// src/Navbar.jsx
import { useState } from "react";
import { logo } from "../assets";
import { navigationLinks } from "../util/constants";
import { styles } from "../util/style";
import close from "../assets/close.png"
import menu from "../assets/menu.png"

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");

  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id) => setActive(id);

  return (
    <div className={`w-full py-6 ${styles.flexBetween} bg-primary px-6`}>
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[130px] h-[35px] cursor-pointer"
      />

      {/* Navigation Links (Desktop) */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-6">
        {navigationLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] transition-all duration-500 ${
              active === nav.id ? "text-white" : "text-lightWhite hover:text-white"
            }`}
            onClick={() => activeHandler(nav.id)}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      {/* Hamburger Menu (Mobile) */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleNav ? close : menu}
          alt="nav"
          className="w-[30px] h-[30px] object-contain"
          onClick={toggleHandler}
        />

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 left-0 w-full sidebar`}
        >
          <ul className="list-none flex flex-row justify-center items-center gap-6 ">
            {navigationLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-montserrat font-normal cursor-pointer text-[16px] transition-all duration-500 ${
                  active === nav.id ? "text-white" : "text-lightWhite hover:text-white"
                }`}
                onClick={() => activeHandler(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
