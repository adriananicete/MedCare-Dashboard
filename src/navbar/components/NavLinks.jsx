import { GoHome } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { NavLink } from "react-router";

function NavLinks() {
    return ( 
        <nav className="">
  <ul className="flex justify-center items-center gap-5 text-[14px] font-[600]">
    <li>
      <NavLink
        to="/overview"
        className={({ isActive }) =>
          isActive ? "flex items-center gap-2 font-bold bg-[#01f0d0] px-[20px] py-[10px] rounded-[41px]" : "flex items-center gap-2 text-gray-700 px-[20px] py-[10px]"
        }
      >
        <GoHome size={20} />
        Overview
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/patients"
        className={({ isActive }) =>
          isActive ? "flex items-center gap-2 font-bold bg-[#01f0d0] px-[20px] py-[10px] rounded-[41px]" : "flex items-center gap-2 text-gray-700 px-[20px] py-[10px]" 
        }
      >
        <LuUsers size={20} />
        Patients
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/schedule"
        className={({ isActive }) =>
          isActive ? "flex items-center gap-2 font-bold bg-[#01f0d0] px-[20px] py-[10px] rounded-[41px]" : "flex items-center gap-2 text-gray-700 px-[20px] py-[10px]"
        }
      >
        <RiCalendarScheduleLine size={20} />
        Schedule
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/message"
        className={({ isActive }) =>
          isActive ? "flex items-center gap-2 font-bold bg-[#01f0d0] px-[20px] py-[10px] rounded-[41px]" : "flex items-center gap-2 text-gray-700 px-[20px] py-[10px]"
        }
      >
        <FaRegMessage size={18} />
        Message
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          isActive ? "flex items-center gap-2 font-bold bg-[#01f0d0] px-[20px] py-[10px] rounded-[41px]" : "flex items-center gap-2 text-gray-700 px-[20px] py-[10px]"
        }
      >
        <IoBriefcaseOutline size={20} />
        Transactions
      </NavLink>
    </li>
  </ul>
</nav>
     );
}

export default NavLinks;