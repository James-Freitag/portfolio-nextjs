"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/me.jpg";

const About = () => {
  const fadeAnimationVariant = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const skills = [
    "Javascript",
    "HTML",
    "CSS",
    "Typescript",
    "Next.js",
    "React",
    "Tailwind",
    "Node.js",
    "Git",
    "Remix.js",
    "Framer Motion",
    "Bootstrap",
  ];
  return (
    <section
      id="about"
      className="h-dvh pt-20 w-full flex flex-col items-center"
    >
      <div className="w-[65%] py-3 px-4 bg-neutral-950 border-[1px] border-gray-400">
        <h2 className="text-3xl p-2 bg-neutral-950 text-sky-400 pb-12">
          This is me.
        </h2>
        <div className="w-3/4 grid grid-cols-2 mx-auto justify-evenly bg-neutral-950">
          <p className="place-self-center leading-relaxed tracking-wide bg-neutral-950 p-4">
            Hi, my name is <span className="text-sky-400">James Freitag</span>.
            I am a self taught front end developer. I have been a
            maintenance/handyman for 10+ years. So I guess I'm just switching
            from building material things to building coding things! I've been
            learning for the last 1.5 years using my tech stack - below. I've
            learned from various places -{" "}
            <span className="text-sky-400">'ui.dev'</span>,{" "}
            <span className="text-sky-400">'Grokking Algorithms'</span>, and{" "}
            <span className="text-sky-400">
              'JavaScript from Beginner to Professional'
            </span>{" "}
            plus others. I have an itch for learning new things and always love
            a good challenge. I know I'm new and my challenges right now are on
            the junior side of this career, but the satisfaction of figuring
            something out without a straight forward tutorial is the best
            feeling. Thanks for visiting and I would love to talk!
          </p>
          <div className="p-4 bg-neutral-950">
            <Image
              src={profilePic}
              alt="Picture of James Freitag"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-neutral-950 pb-4">
          <p className="py-4 text-2xl bg-neutral-950">- My Skills -</p>
          <ul className="grid grid-cols-4 text-center gap-3 bg-neutral-950">
            {skills.map((skill, index) => (
              <motion.li
                className="bg-neutral-900 rounded-lg py-1 px-2 text-lg"
                key={index}
                variants={fadeAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
