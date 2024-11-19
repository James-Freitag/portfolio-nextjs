"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Project Screenshots
import orioleScreenshot from "../../public/oriole-screenshot.png";
import harrypotterScreenshot from "../../public/harrypotter-screenshot.png";
import sortingHatScreenshot from "../../public/sortinghat-screenshot.png";
import expenseTracker from "../../public/expense-tracker.png";

const fadeLeftToRight = {
  initial: {
    opacity: 0,
    scale: 0.5,
    x: -250,
  },
  animate: () => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
};
const fadeRightToLeft = {
  initial: {
    opacity: 0,
    scale: 0.5,
    x: 250,
  },
  animate: () => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.8,
      ease: [0, 0.71, 0.2, 1.01],
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-full pt-16 w-full flex flex-col items-center"
    >
      <div className="w-[65%] py-3 px-4">
        <h3 className="text-3xl text-center md:text-left text-sky-400  p-2">
          - Projects -
        </h3>
        <div className=" flex justify-center items-center pb-12">
          <div className="grid w-full box-border md:w-3/4 grid-cols-1 md:grid-cols-5 md:pt-16 gap-2">
            <motion.div
              variants={fadeLeftToRight}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full h-auto rounded-lg md:col-span-3 py-3 px-4 bg-neutral-950 border-[1px] border-gray-400"
            >
              <p className="text-center md:text-left pb-2 md:pb-0">Oriole</p>
              <div className="h-auto w-full rounded-lg flex justify-center items-center">
                <Image
                  src={orioleScreenshot}
                  alt="screenshot"
                  className="w-[18.75rem] object-cover rounded-lg"
                  width={300}
                />
              </div>
              <div className="flex justify-evenly items-center pt-2 w-full py-1">
                <button className="bg-neutral-800 rounded-lg px-2">
                  <Link
                    target="_blank"
                    className="bg-neutral-800"
                    href="https://github.com/James-Freitag/orioloe-clone"
                  >
                    Code
                  </Link>
                </button>
                <button className="bg-neutral-800 rounded-lg px-2">
                  <Link
                    target="_blank"
                    className="bg-neutral-800"
                    href="https://orioloe-clone.fly.dev"
                  >
                    Preview
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeRightToLeft}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full h-auto py-3 px-4 col-span-2 bg-neutral-950 rounded-lg border-[1px] border-gray-400 flex flex-col justify-evenly items-center"
            >
              <p className="text-center w-full md:text-left pb-2 md:pb-0">
                Cards
              </p>
              <div className="h-auto flex justify-center items-center w-full rounded-lg">
                <Image
                  src={harrypotterScreenshot}
                  alt="screenshot"
                  width={300}
                  className="object-cover bg-neutral-950 h-[196px] w-[300px]  rounded-lg"
                />
              </div>
              <div className="flex justify-evenly pt-2 w-full py-1">
                <button className="bg-neutral-800 rounded-lg px-2">
                  <Link
                    target="_blank"
                    className="bg-neutral-800"
                    href="https://github.com/James-Freitag/sorting-hat-app"
                  >
                    Code
                  </Link>
                </button>
                <button className="bg-neutral-800 rounded-lg px-2">
                  <Link
                    target="_blank"
                    className="bg-neutral-800"
                    href="https://unsplash-potter.fly.dev/"
                  >
                    Preview
                  </Link>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeLeftToRight}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full h-auto py-3 px-4 md:row-start-2 col-span-2 rounded-lg bg-neutral-950 border-[1px] border-gray-400"
            >
              <p className="text-center w-full md:text-left pb-2 md:pb-0">
                Expense Tracker
              </p>
              <div className="h-auto flex justify-center items-center w-full rounded-lg">
                <Image
                  src={expenseTracker}
                  alt="screenshot"
                  width={300}
                  className="object-cover bg-neutral-950 h-[196px] w-[300px]  rounded-lg"
                />
              </div>
              <div className="flex justify-evenly items-center w-full py-1 pt-2">
                <button className="bg-neutral-800 rounded-lg px-2">Code</button>
                <button className="bg-neutral-800 rounded-lg px-2">
                  <a
                    target="_blank"
                    className="bg-neutral-800"
                    href="https://app-divine-butterfly-5852.fly.dev/"
                  >
                    Preview
                  </a>
                </button>
              </div>
            </motion.div>
            <motion.div
              variants={fadeRightToLeft}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full h-auto py-3 px-4 md:col-span-3 md:row-start-2 bg-neutral-950 rounded-lg border-[1px] border-gray-400"
            >
              <p className="text-center md:text-left pb-2 md:pb-0">
                Sorting Hat - Work in progress
              </p>
              <div className="h-auto w-full rounded-lg flex justify-center items-center">
                <Image
                  src={sortingHatScreenshot}
                  alt="screenshot"
                  className="w-[300px] h-[196px] object-cover rounded-lg"
                  width={300}
                />
              </div>
              <div className="flex justify-evenly items-center pt-2 w-full py-1">
                <button className="bg-neutral-800 rounded-lg px-2">
                  <Link
                    target="_blank"
                    className="bg-neutral-800"
                    href="https://github.com/James-Freitag/sorting-hat-app"
                  >
                    Code
                  </Link>
                </button>
                <button className="bg-neutral-800 rounded-lg px-2">
                  <Link
                    target="_blank"
                    className="bg-neutral-800"
                    href="https://sorting-hat-app.fly.dev"
                  >
                    Preview
                  </Link>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
