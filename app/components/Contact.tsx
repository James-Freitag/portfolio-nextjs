// React Icons imports
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
// Next js imports
import Link from "next/link";

const Contact = () => {
  const iconSize = 30;
  return (
    <footer
      id="contact"
      className="h-full py-16 w-full flex flex-col items-center"
    >
      <div className="w-[65%] h-full pt-3 pb-16 px-4 bg-neutral-950 border-[1px] border-gray-400">
        <h4 className="text-3xl p-2 bg-neutral-950 text-sky-400 pb-12">
          - Contact Me -
        </h4>
        <div className="w-3/4 h-auto grid grid-cols-2 gap-4 mx-auto bg-neutral-950">
          <div className="flex space-y-2 flex-col items-center p-4 bg-neutral-950">
            <div className="flex flex-col justify-center items-center space-y-4 bg-neutral-950">
              <p className="bg-neutral-950">James Freitag</p>
              <p className="bg-neutral-950">847-476-9849</p>
              <p className="bg-neutral-950">Ingleside, IL</p>
              <p className="bg-neutral-950">jamesfreitag05@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 items-center p-4 bg-neutral-950">
            <ul className="flex flex-col justify-center items-center space-y-6 bg-neutral-950">
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
        </div>
      </div>
    </footer>
  );
};

export default Contact;
