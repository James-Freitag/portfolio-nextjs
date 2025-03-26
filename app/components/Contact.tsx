"use client";
// React Icons imports
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

// Next js imports
import Link from "next/link";
// Framer import
import { easeIn, motion } from "framer-motion";

const Contact = () => {
  const iconSize = 30;

  const fadeInVariant = {
    initial: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        easeIn: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <footer id="contact" className="w-full md:py-16 flex flex-col items-center">
      <motion.div
        variants={fadeInVariant}
        whileInView="animate"
        initial="initial"
        viewport={{
          once: true,
        }}
        className="md:w-[65%] w-full h-full pt-3 pb-16 px-4 bg-neutral-950 border-y md:border border-gray-400"
      >
        <h4 className="text-3xl p-2 text-center md:text-left bg-neutral-950 text-sky-400 md:pb-12">
          - Contact Me -
        </h4>
        <div className="md:w-3/4 h-auto grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto bg-neutral-950">
          <div className="flex space-y-2 flex-col items-center p-4 bg-neutral-950">
            <div className="flex flex-col justify-center items-center space-y-4 bg-neutral-950">
              <p>James Freitag</p>
              <p>847-476-9849</p>
              <p>Ingleside, IL</p>
              <p>jamesfreitag05@gmail.com</p>
            </div>
          </div>
          <div className="flex md:flex-col justify-center space-y-2 items-center p-4 bg-neutral-950">
            <ul className="flex md:flex-col justify-center items-center space-x-6 md:space-x-0 md:space-y-6 bg-neutral-950">
              <li className="bg-neutral-950 hover:scale-105">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/james-freitag-b758662a2/"
                >
                  <FiLinkedin size={iconSize} />
                </Link>
              </li>
              <li className="bg-neutral-950 hover:scale-105">
                <Link target="_blank" href="https://github.com/James-Freitag">
                  <FaGithub size={iconSize} />
                </Link>
              </li>
              <li className="bg-neutral-950 hover:scale-105">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/freitag05/"
                >
                  <IoLogoInstagram size={iconSize} />
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href="#home"
            className="md:col-span-2 pt-8 place-items-center mx-auto animate-bounce"
          >
            <IoIosArrowUp
              size={iconSize}
              style={{ fill: "rgb(56 189 248)", background: "rgb(10 10 10)" }}
            />
          </Link>
        </div>
      </motion.div>
      <div className="flex justify-center items-center gap-4 h-full py-12 w-full mx-auto">
        <p className="text-white/25 text-center">&copy;JamesFreitag 2024</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="Dev-Resume.pdf"
          className="text-sky-400 animate-pulse"
        >
          My Resume
        </a>
      </div>
    </footer>
  );
};

export default Contact;
