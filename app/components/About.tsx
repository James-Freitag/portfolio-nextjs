"use client";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/me.jpg";

const About = () => {
  const name = "James";
  const nameAnimationVariant = {
    initial: {
      y: -10,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const fadeSkillsAnimationVariant = {
    initial: {
      opacity: 0,
      x: -150,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  const skills = [
    "Javascript",
    "HTML",
    "CSS",
    "Git",
    "Next.js",
    "React",
    "Tailwind",
    "Node.js",
    "Typescript",
    "SQL",
    "Framer",
    "Bootstrap",
  ];
  return (
    <section id="about" className="py-4 md:pt-16 flex flex-col items-center">
      <motion.div
        variants={{
          initial: {
            opacity: 0,
            y: 100,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.2,
            },
          },
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="md:w-[65%] p-4 bg-neutral-950 border-y md:border-[1px] border-gray-400"
      >
        <h2 className="text-3xl text-center md:text-left p-2 bg-neutral-950 text-sky-400 md:pb-12">
          - This is me -
        </h2>
        <div className="md:w-3/4 grid grid-cols-1 lg:grid-cols-2 mx-auto justify-evenly items-center bg-neutral-950">
          <p className="place-self-center text-md leading-relaxed tracking-wide bg-neutral-950 p-4">
            Hi, my name is{" "}
            <span>
              {name.split("").map((l, i) => {
                return (
                  <motion.span
                    variants={nameAnimationVariant}
                    initial="initial"
                    whileInView="animate"
                    transition={{
                      delay: 0.3 * i,
                    }}
                    viewport={{ once: true }}
                    className="text-sky-400 inline-block text-lg"
                    key={i}
                  >
                    {l}
                  </motion.span>
                );
              })}
            </span>
            . I am a self taught front end developer. I have been a maintenance
            & handyman for 10+ years. So I guess I just switched from building
            material things to building coding things! I&apos;ve been learning
            for the last 1.5 years using my tech stack - below. I&apos;ve
            learned from various places -{" "}
            <span className="text-sky-400 text-md md:text-lg">
              &apos;ui.dev&apos;
            </span>
            ,{" "}
            <span className="text-sky-400 text-md md:text-lg">
              &apos;Grokking Algorithms&apos;
            </span>
            , and{" "}
            <span className="text-sky-400 text-md md:text-lg">
              &apos;JavaScript from Beginner to Professional&apos;
            </span>{" "}
            plus others. I have an itch for learning new things and always love
            a good challenge. I know I&apos;m new and my challenges right now
            are on the junior side of this career, but the satisfaction of
            figuring something out without a straight forward tutorial is the
            best and most rewarding feeling. Thanks for visiting and I would
            love to talk!{" "}
          </p>
          <div className="p-4 bg-neutral-950">
            <Image
              src={profilePic}
              alt="Picture of James Freitag"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-neutral-950 md:pb-4 md:px-2">
          <p className="py-4 text-2xl">- My Skills -</p>
          <ul className="grid grid-cols-2 lg:grid-cols-4 text-center gap-1 lg:gap-3 bg-neutral-950">
            {skills.map((skill, index) => (
              <motion.li
                className="bg-neutral-900 rounded-lg py-1 px-2 text-md lg:text-lg"
                key={index}
                variants={fadeSkillsAnimationVariant}
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
      </motion.div>
    </section>
  );
};

export default About;
