"use client";

import { Logo } from "@/components/logo";
import { ChatGptIcon, GoogleSheetsIcon, InstaIcon, MetaIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { IconPrison } from "@tabler/icons-react";
import { motion } from "motion/react";

export const SkeletonTwo = () => {
  return (
    <div
      className="absolute inset-x-0 mx-auto flex h-full w-full flex-1 items-center justify-center gap-3 rounded-t-3xl p-2"
      style={{transform:"rotateY(20deg) rotateX(20deg) rotateZ(-20deg)"}}
    >
      {/* this part is to create revolving cards around a center logo */}
      <Circle className="flex items-center justify-center border-neutral-200 shadow-sm">
        {/* center logo */}
        <Logo className="size-10" />

        <RevolvingCard>
          <MetaIcon className="size-8 text-blue-500" />
        </RevolvingCard>

        <RevolvingCard className="[--orbit-duration:20s] [--translate-position:140px]">
          <GoogleSheetsIcon className="size-6 text-green-500" />
        </RevolvingCard>

        <RevolvingCard className="[--orbit-duration:15s] [--translate-position:140px]">
          <ChatGptIcon className="size-8 text-neutral-700" />
        </RevolvingCard>

        <RevolvingCard className="[--orbit-duration:15s] [--translate-position:140px]">
          <InstaIcon className="size-8 text-red-500" />
        </RevolvingCard>

        <RevolvingCard className="size-auto w-60 bg-transparent shadow-none ring-0 [--orbit-duration:30s] [--translate-position:250px]">
          <SkeletonCard
            className="absolute bottom-20 left-4 z-10 max-w-[80%]"
            icon={<IconPrison className="size-4" />}
            title="Risk Analysis"
            description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
          />
        </RevolvingCard>
        {/* end revolving cards */}
      </Circle>
      {/*  surrounding circles for depth effect */}
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

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
}: {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  badge?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto my-auto h-fit w-full max-w-[85%] rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <p className="text-sm font-normal text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="mt-3 text-sm font-medium text-neutral-400/80 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};
