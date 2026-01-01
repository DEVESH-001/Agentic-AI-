"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

const LandingImages = () => {
  return (
    <div className="relative min-h-140 w-full pt-20 perspective-distant">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="shadow-2xl perspective-[4000px]"
      >
        <Image
          alt="Hero image of AI agents"
          src="/newHero.png"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl",
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
        className="translate-x-20 translate-y-20 perspective-[4000px]"
      >
        <Image
          alt="Hero image of AI agents"
          src="/newHero.png"
          height={1080}
          width={1920}
          className={cn(
            "absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl",
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
