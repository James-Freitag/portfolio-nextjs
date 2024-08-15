"use client";
import { useState } from "react";
import Link from "next/link";
// Framer Motion
import { motion, MotionConfig } from "framer-motion";

// Icons
import { HiHome } from "react-icons/hi";
import { PiUserFill } from "react-icons/pi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaFolder } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClose = () => {
    setActive(false);
  };

  const iconSize = 35;
  return (
    <nav className="w-full h-screen lg:w-[16.5%] lg:h-dvh flex justify-center items-center fixed z-9999 bg-transparent">
      <ul className="flex-col hidden lg:flex items-center justify-center w-auto py-4 px-3 space-y-12  rounded-full h-[40%] bg-neutral-900">
        <li className="relative group">
          <Link href="#home">
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
          <Link href="#about">
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
          <Link href="#projects">
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
          <Link href="#contact">
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
      {/*------------------------------------- Hamburger Menu -----------------------------------*/}
      <div className="absolute lg:hidden top-5 right-5 bg-transparent">
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            onClick={() => setActive(!active)}
            className=" relative h-14 w-14 rounded-full bg-transparent"
            animate={active ? "open" : "closed"}
          >
            <motion.span
              style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
              className="absolute h-1 w-10 bg-white"
              variants={{
                open: {
                  top: ["35%", "50%", "50%"],
                  rotate: ["0deg", "0deg", "45deg"],
                },
                closed: {
                  top: ["50%", "50%", "35%"],
                  rotate: ["45deg", "0deg", "0deg"],
                },
              }}
            />
            <motion.span
              style={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
              }}
              className="absolute h-1 w-10 bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "-45deg"],
                },
                closed: {
                  rotate: ["-45deg", "0deg", "0deg"],
                },
              }}
            />
            <motion.span
              style={{
                left: "calc(50% + 10px)",
                bottom: "35%",
                x: "-50%",
                y: "50%",
              }}
              className="absolute h-1 w-5 bg-white"
              variants={{
                open: {
                  rotate: ["0deg", "0deg", "45deg"],
                  left: "50%",
                  bottom: ["35%", "50%", "50%"],
                  opacity: 0,
                },
                closed: {
                  rotate: ["45deg", "0deg", "0deg"],
                  left: "calc(50% + 10px)",
                  bottom: ["50%", "50%", "35%"],
                  opacity: 1,
                },
              }}
            />
          </motion.button>
        </MotionConfig>
      </div>
      {active && (
        <motion.div
          transition={{ ease: "easeInOut", duration: 0.5 }}
          variants={{
            initial: {
              y: -300,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
            },
          }}
          initial="initial"
          animate="animate"
          className="bg-gradient-to-tr from-neutral-950 uppercase flex flex-col items-center space-y-6 pt-28 via-neutral-900 to-neutral-950 h-screen w-full"
        >
          <Link
            onClick={handleClose}
            href="#home"
            className="bg-transparent text-2xl text-sky-400"
          >
            home
          </Link>
          <Link
            onClick={handleClose}
            href="#about"
            className="bg-transparent text-2xl text-sky-400"
          >
            about
          </Link>
          <Link
            onClick={handleClose}
            href="#projects"
            className="bg-transparent text-2xl text-sky-400"
          >
            projects
          </Link>
          <Link
            onClick={handleClose}
            href="#contact"
            className="bg-transparent text-2xl text-sky-400"
          >
            contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
