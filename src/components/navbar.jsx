import { logo } from "../assets";
import { navigationLinks } from "../util/constants";
import { styles } from "../util/style";

const Navbar = () => {
  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* logo */}
      <img src={logo} alt="logo" srcset="" className="w-[130px] h-[35px] cursor-pointer" />

      {/* navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-[10px]">
        {navigationLinks.map((nav, idx) => (
          <li key={nav.id} className="font-montserrat font-normal cursor-pointer text-[16px] text-white mr-10 hover:text=lightWhite transition-all duration-500">
            {nav.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
