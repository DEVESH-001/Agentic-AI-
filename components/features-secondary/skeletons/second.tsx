"use client";

import { Logo } from "@/components/logo";
import { ChatGptIcon, GoogleSheetsIcon, InstaIcon, MetaIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const SkeletonTwo = () => {
  return (
    <div className="absolute inset-x-0 mx-auto flex h-full w-full flex-1 items-center justify-center gap-3 rounded-t-3xl p-2">
      <Circle className="flex items-center justify-center border-neutral-200 shadow-sm">
        <Logo className="size-10" />

        <RevolvingCard>
          <MetaIcon />
        </RevolvingCard>

        <RevolvingCard>
          <GoogleSheetsIcon />
        </RevolvingCard>
        
      </Circle>
      <Circle className="z-9 size-60 border-neutral-100 bg-neutral-100/80 shadow"></Circle>
      <Circle className="z-8 size-80 border-neutral-100 bg-neutral-100/60 shadow"></Circle>
      <Circle className="z-7 size-100 border-neutral-100 bg-neutral-100/40 shadow"></Circle>
      <Circle className="z-6 size-120 border-neutral-100 bg-neutral-100/20 shadow"></Circle>
    </div>
  );
};

const RevolvingCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "animate-orbit absolute inset-0 m-auto flex size-8 items-center justify-center rounded-sm border border-transparent bg-white ring-1 shadow-black/10 ring-black/10 [--orbit-duration:10s] [--translate-position:120px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Circle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 m-auto size-40 rounded-full border border-transparent bg-white",
        className,
      )}
    >
      {children}
    </div>
  );
};
