"use client";
import { animate, motion } from "framer-motion";

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
        <div className="flex justify-center items-center pb-12">
          <div className="grid w-full box-border md:w-3/4 grid-cols-1 md:grid-cols-3 md:pt-16 gap-2">
            <motion.div
              variants={fadeLeftToRight}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full h-auto rounded-lg md:col-span-2 py-3 px-4 bg-neutral-950 border-[1px] border-gray-400"
            >
              <p className="text-center md:text-left pb-2 md:pb-0">Project 1</p>
              <div className="h-auto w-full px-4 bg-blue-500 rounded-lg"></div>
              <div className="flex justify-evenly items-center pt-2 w-full py-1">
                <button className="bg-neutral-800 rounded-lg px-2">Code</button>
                <button className="bg-neutral-800 rounded-lg px-2">
                  Preview
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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full h-auto py-3 px-4 bg-neutral-950 rounded-lg border-[1px] border-gray-400"
            >
              <p className="text-center md:text-left pb-2 md:pb-0">Project 2</p>
              <div className="h-auto w-full px-4 bg-blue-700 rounded-lg"></div>
              <div className="flex justify-evenly items-center w-full pt-2 py-1">
                <button className="bg-neutral-800 rounded-lg px-2">Code</button>
                <button className="bg-neutral-800 rounded-lg px-2">
                  Preview
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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full h-auto py-3 px-4 md:row-start-2 col-span-1 rounded-lg bg-neutral-950 border-[1px] border-gray-400"
            >
              <p className="text-center md:text-left pb-2 md:pb-0">Project 3</p>
              <div className="h-auto w-full px-4 bg-blue-300 rounded-lg"></div>
              <div className="flex justify-evenly items-center w-full py-1 pt-2">
                <button className="bg-neutral-800 rounded-lg px-2">Code</button>
                <button className="bg-neutral-800 rounded-lg px-2">
                  Preview
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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full h-auto py-3 px-4 md:col-span-2 md:row-start-2 bg-neutral-950 rounded-lg border-[1px] border-gray-400"
            >
              <p className="text-center md:text-left pb-2 md:pb-0">Project 4</p>
              <div className="h-auto w-full px-4 bg-blue-900 rounded-lg"></div>
              <div className="flex justify-evenly items-center w-full pt-2 py-1">
                <button className="bg-neutral-800 rounded-lg px-2">Code</button>
                <button className="bg-neutral-800 rounded-lg px-2">
                  Preview
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
