import {
  MdOutlineHistory,
  MdOutlineSettings,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { IoIosStats, IoMdHelpCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  const NAVBAR_ITEMS = [
    { name: "Session", icon: MdOutlineSportsBasketball, href: "/" },
    { name: "Statistics", icon: IoIosStats, href: "/stats" },
    { name: "Historic", icon: MdOutlineHistory, href: "/historic" },
    { name: "Help", icon: IoMdHelpCircleOutline, href: "/help" },
    { name: "Setting", icon: MdOutlineSettings, href: "/setting" },
  ];
  return (
    <div className="bg-purple text-white fixed bottom-0 w-full right-0 h-16  py-2">
      <nav className="flex justify-between items-center px-5">
        {NAVBAR_ITEMS.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className={({ isActive }) =>
              `${isActive ? "text-yellow" : "text-white"} hover:text-yellow transition-colors`
            } 
          >
            <div className="flex flex-col items-center justify-center">
              <item.icon size={24} />
              <span className="text-sm"> {item.name} </span>
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MainNavbar;
