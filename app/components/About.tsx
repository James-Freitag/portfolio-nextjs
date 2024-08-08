import { motion } from "framer-motion";

const About = () => {
  const fadeAnimationVariant = {
    initial: {
      opactiy: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
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
    <section className="about h-dvh pt-20 w-full flex flex-col items-center">
      <div className="w-[65%] py-3 px-4 bg-neutral-950 border-[1px] border-gray-400">
        <h2 className="text-3xl p-2 bg-neutral-950">This is me.</h2>
        <div className="flex flex-col items-center bg-neutral-950">
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
