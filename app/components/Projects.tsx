"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Project Screenshots
import orioleScreenshot from "../../public/oriole-screenshot.png";
import feloniousGru from "../../public/gru-site.png";
import sortingHatScreenshot from "../../public/sortinghat-screenshot.png";
import hunterCodex from "../../public/hunter-codex.png";

const fadeInVariant = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projects = [
  {
    name: "Oriole",
    image: orioleScreenshot,
    code: "https://github.com/James-Freitag/orioloe-clone",
    preview: "https://orioloe-clone.fly.dev",
  },
  {
    name: "Felonious Gru",
    image: feloniousGru,
    code: "https://github.com/James-Freitag/felonious-gru/tree/master/src/app",
    preview: "https://felonious-gru.fly.dev/",
  },
  {
    name: "MH Wilds Codex",
    image: hunterCodex,
    code: "https://github.com/James-Freitag/hunters-codex/tree/main/src/app",
    preview: "https://hunters-codex.fly.dev/",
  },
  {
    name: "Diagon Alley",
    image: sortingHatScreenshot,
    code: "https://github.com/James-Freitag/diagon-alley/tree/master/src/app",
    preview: "https://sorting-hat-app.fly.dev",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-4 md:py-16 flex flex-col items-center">
      <div className="w-full max-w-5xl px-6">
        <h3 className="text-3xl text-center text-sky-400 pb-8">- Projects -</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-neutral-950 border border-gray-400 rounded-lg p-4 flex flex-col items-center"
            >
              <p className="text-lg font-semibold mb-2">{project.name}</p>
              <div className="w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="w-full h-full object-cover"
                  width={300}
                  height={200}
                />
              </div>
              <div className="flex justify-between w-full mt-4">
                <Link
                  href={project.code}
                  target="_blank"
                  className="bg-neutral-800 px-3 py-1 rounded-lg text-white hover:bg-neutral-700"
                >
                  Code
                </Link>
                <Link
                  href={project.preview}
                  target="_blank"
                  className="bg-neutral-800 px-3 py-1 rounded-lg text-white hover:bg-neutral-700"
                >
                  Preview
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
