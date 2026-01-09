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
        <div className="absolute inset-x-0 z-50 h-full w-full mask-t-from-10%"></div>
      )}
      <div className="relative min-h-72 w-full overflow-hidden pt-20 perspective-distant sm:min-h-80 md:min-h-100 lg:min-h-140">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="shadow-2xl perspective-[4000px]"
        >
          <Image
            src={firstImageSrc}
            alt="Hero image of AI agents"
            loading="eager"
            height={1080}
            width={1920}
            draggable={false}
            className={cn(
              "pointer-events-none absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl select-none",
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="translate-x-20 -translate-y-10 perspective-[4000px] md:-translate-y-20 lg:-translate-y-40"
        >
          <Image
            src={secondImageSrc}
            alt="Hero image of AI agents"
            loading="eager"
            height={1080}
            width={1920}
            draggable={false}
            className={cn(
              "pointer-events-auto absolute inset-0 -translate-x-10 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none",
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LandingImages;
