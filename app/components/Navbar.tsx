import Link from "next/link";
// Icons
import { HiHome } from "react-icons/hi";
import { PiUserFill } from "react-icons/pi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaFolder } from "react-icons/fa";

const Navbar = () => {
  const iconSize = 35;
  return (
    <nav className="w-[16.5%] h-dvh flex justify-center items-center fixed z-9999 bg-transparent">
      <ul className="flex flex-col items-center justify-center w-auto py-4 px-3 space-y-12  rounded-full h-[40%] bg-neutral-900">
        <li className="relative group">
          <Link href="#header">
            <HiHome
              size={iconSize}
              className="bg-neutral-900 hover:scale-110 duration-200 ease-in"
            />
          </Link>
          <div className="absolute left-1/2 px-1 transform -translate-x-1/2 w-12 bg-gray-200 text-black text-center text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in">
            Home
          </div>
        </li>
        <li className="relative group">
          <Link href="/">
            <PiUserFill
              size={iconSize}
              className="bg-neutral-900 hover:scale-110 duration-200 ease-in"
            />
          </Link>
          <div className="absolute left-1/2 px-1 transform -translate-x-1/2 w-12 bg-gray-200 text-black text-center text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in">
            About
          </div>
        </li>
        <li className="relative group">
          <Link href="/">
            <FaFolder
              size={iconSize}
              className="bg-neutral-900 hover:scale-110 duration-200 ease-in"
            />
          </Link>
          <div className="absolute left-1/2 px-1 transform -translate-x-1/2 w-12 bg-gray-200 text-black text-center text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in">
            Work
          </div>
        </li>
        <li className="relative group">
          <Link href="/">
            <MdOutlineConnectWithoutContact
              size={iconSize}
              className="bg-neutral-900 hover:scale-110 duration-200 ease-in"
            />
          </Link>
          <div className="absolute left-1/2 px-1 transform -translate-x-1/2 w-12 bg-gray-200 text-black text-center text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in">
            Email
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
