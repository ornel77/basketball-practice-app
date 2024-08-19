import { MdOutlineHistory, MdOutlineSettings  } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";
import { IoIosStats, IoMdHelpCircleOutline  } from "react-icons/io";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const NAVBAR_ITEMS = [
    {name: "Session", icon: BiDumbbell  , href: "/"},
    {name: "Statistics", icon: IoIosStats   , href: "/stats"},
    {name: "Historic", icon: MdOutlineHistory   , href: "/historic"},
    {name: "Help", icon: IoMdHelpCircleOutline   , href: "/help"},
    {name: "Setting", icon: MdOutlineSettings   , href: "/setting"}
  ]
  return (
    <div>
     
      <nav>
        {
          NAVBAR_ITEMS.map((item, index) => (
            <Link to={item.href} key={index}>
              {item.name}
            </Link>
          ))
        }
      </nav>
    </div>
  )
}

export default MainNavbar