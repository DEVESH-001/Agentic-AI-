"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export const SkeletonTwo = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-4 space-y-4 rounded-t-3xl px-18 pt-14">
      <div className="mx-auto grid max-w-md grid-cols-4 justify-center gap-2">
        <Item />
        <Item src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item />
      </div>
      {/* 2nd row */}
      <div className="mx-auto grid max-w-md grid-cols-5 justify-center gap-2">
        <Item />
        <Item src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <Item containerClassName="from-black/50 via-transparent to-black/50">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
            <Logo className="size-12" />
          </div>
        </Item>

        <Item src="https://images.unsplash.com/photo-1601745398440-0118cf2a433f?q=80&w=954&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item />
      </div>
      {/* 3rd row */}
      <div className="mx-auto grid max-w-md grid-cols-4 justify-center gap-2">
        <Item />
        <Item src="https://images.unsplash.com/photo-1576110598658-096ae24cdb97?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item src="https://images.unsplash.com/photo-1720088283677-cba580075523?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Item />
      </div>
    </div>
  );
};

const Item = ({
  children,
  className,
  src,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  src?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative aspect-square w-full justify-self-center rounded-xl border border-dashed border-neutral-300 p-px dark:border-neutral-700",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 0.8 + 0.2,
        }}
        className={cn(
          "relative z-10 flex h-full w-full items-center justify-center rounded-2xl p-px",
          src && "bg-linear-to-br from-blue-500 via-transparent to-blue-500",
          containerClassName,
        )}
      >
        {children ?? (
          <>
            {src && (
              <Image
                src={src}
                alt="Skeleton Image"
                height={120}
                width={120}
                className="relative z-20 aspect-square rounded-2xl object-cover"
              />
            )}
          </>
        )}
      </motion.div>

      {/* pattern overlay */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[5px_5px] bg-fixed"></div>
    </div>
  );
};
