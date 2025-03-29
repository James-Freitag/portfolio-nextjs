"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Project Screenshots
import oriole from "../../public/ori-screenshot.png";
import feloniousGru from "../../public/gru-site.png";
import diagonAlley from "../../public/diagon-alley-screenshot.png";
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
    image: oriole,
    code: "https://github.com/James-Freitag/orioloe-clone",
    preview: "https://orioloe-clone.fly.dev",
    details: {
      tech: "NextJS, Typescript, Tailwindcss",
      description:
        "A simple clone of a chicago restaurant. I just liked their website and is one of the first clone sites I made. No functionality on it when it comes to booking of contact forms, though.",
    },
  },
  {
    name: "Felonious Gru",
    image: feloniousGru,
    code: "https://github.com/James-Freitag/felonious-gru/tree/master/src/app",
    preview: "https://felonious-gru.fly.dev/",
    details: {
      tech: "NextJS, Typescript, Tailwindcss",
      description:
        "A website I made for my son, he loves the movies and I just thought it would be fun to make. I would have liked to make the Gru plan more dynamic by linking it to an AI chat for better fluidity. I didn't feel like paying for the AI and the free versions were not very good. So I just hard coded some answers and inserted the users name and object.",
    },
  },
  {
    name: "MH Wilds Codex",
    image: hunterCodex,
    code: "https://github.com/James-Freitag/hunters-codex/tree/main/src/app",
    preview: "https://hunters-codex.fly.dev/",
    details: {
      tech: "NextJS, Turso, SQLite, Tailwindcss",
      description:
        "I wanted a fast and quick look up for monsters, materials and skills in the game Monster Hunter Wilds I play. Rather than going to other websites and having to go through pages and finding the answers, I wanted kind of a pocket guide like in the game but on my phone and quicker. I built the database in Turso using SQLite, without a script, and just entered in all the info I wanted. I enjoy backend work as well and want to eventually be full stack, so this was a great way to practice some database coding. Really enjoyed this one and I use it everyday, along with my buddies I play with.",
    },
  },
  {
    name: "Diagon Alley",
    image: diagonAlley,
    code: "https://github.com/James-Freitag/diagon-alley/tree/master/src/app",
    preview: "https://diagon-alley.fly.dev/",
    details: {
      tech: "NextJS, Turso, SQLite, Typescript, Tailwindcss",
      description:
        "This was a fun idea I had for building an ecommerce style site but as if it were run by Diagon Alley and their shops from Harry Potter. This was the first site I was attempting to build my own database and it turned out to be a lot more work than I expected. But I still love the idea of the site. I'm still working on the app and plan to add a shopping cart and login.",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-4 md:py-16 flex flex-col items-center">
      <div className="w-full max-w-5xl px-6">
        <h3 className="text-3xl text-center text-sky-400 pb-8">- Projects -</h3>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-neutral-950 border border-gray-400 p-4 items-center grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex flex-col">
                <p className="text-lg text-center font-semibold mb-2">
                  {project.name}
                </p>
                <div className="w-full aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-fit"
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
              </div>
              <div className="col-span-2">
                <ul>
                  <li className="text-sm">{project.details.description}</li>
                  <li className="text-sky-400 pt-4">{project.details.tech}</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
