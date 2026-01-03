"use client";

import { motion } from "motion/react";
import Image from "next/image";

const LogoCloud = () => {
  const logos = [
    {
      title: "Open AI",
      src: "https://assets.aceternity.com/logos/openai.png",
    },
    {
      title: "Hello Patient",
      src: "https://assets.aceternity.com/logos/hello-patient.png",
    },
    {
      title: "Character AI",
      src: "https://assets.aceternity.com/logos/characterai.png",
    },
    {
      title: "Portola",
      src: "https://assets.aceternity.com/logos/portola.png",
    },
    {
      title: "Oracle",
      src: "https://assets.aceternity.com/logos/oracle.png",
    },
    {
      title: "Claude",
      src: "https://assets.aceternity.com/logos/openai.png",
    },
  ];
  return (
    <section className="pt-20 pb-10 md:pb-10 ">
      <h2 className="mx-auto max-w-xl text-center text-lg text-neutral-500 dark:text-neutral-400">
        Trusted by modern operators across industries <br />{" "}
        <span className="font-medium text-neutral-600">
          From startups to enterprises without chaos.
        </span>
      </h2>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 md:grid-cols-3">
        {logos.map((logo, index) => (
          <motion.div
            initial={{ y: -10, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            key={logo.title}
          >
            <Image
              src={logo.src}
              alt={logo.title}
              width={100}
              height={100}
              className="mx-auto size-20 object-contain dark:invert"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LogoCloud;
