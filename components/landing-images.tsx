"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

const LandingImages = () => {
  return (
    <div className="relative min-h-72 w-full overflow-hidden pt-20 perspective-distant sm:min-h-80 md:min-h-100 lg:min-h-140 translate-x-30">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="shadow-2xl perspective-[4000px]"
      >
        <Image
          alt="Hero image of AI agents"
          loading="eager"
          src="/newHero.png"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 h-auto w-full rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl",
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
        className="translate-x-20 -translate-y-10 perspective-[4000px] md:-translate-y-20"
      >
        <Image
          alt="Hero image of AI agents"
          loading="eager"
          src="/newHero.png"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 h-auto w-full rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl",
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default LandingImages;
