"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

const LandingImages = ({
  firstImageSrc = "/hero.png",
  secondImageSrc = "/hero2.png",
  showGradient = true,
}) => {
  return (
    <div className="relative">
      {showGradient && (
        <div className="pointer-events-none absolute inset-0 z-30 h-full w-full   mask-r-from-25% mask-b-from-25%"></div>
      )}
      <div className="relative mt-16 md:mt-20 lg:mt-24 min-h-72 w-full overflow-hidden pt-20 perspective-distant sm:min-h-80 md:min-h-100 lg:min-h-140">
        <motion.div
          className="absolute inset-0 z-10 shadow-2xl perspective-[4000px]"
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={firstImageSrc}
              alt="Hero image of AI agents"
              loading="eager"
              priority
              height={1080}
              width={1920}
              draggable={false}
              className={cn(
                "pointer-events-none absolute inset-0 rounded-lg shadow-xl select-none mask-r-from-15% mask-b-from-15% scale-105",
              )}
              style={{
                transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 z-20 translate-x-20 -translate-y-10 perspective-[4000px] md:-translate-y-20 lg:-translate-y-40"
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={secondImageSrc}
              alt="Hero image of AI agents"
              loading="eager"
              priority
              height={1080}
              width={1920}
              draggable={false}
              className={cn(
                "pointer-events-auto absolute inset-0 -translate-x-10 rounded-lg shadow-xl select-none mask-r-from-25% mask-b-from-25% scale-105",
              )}
              style={{
                transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingImages;
