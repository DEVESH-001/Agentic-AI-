"use client";
import { motion } from "motion/react";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";

export const FeaturesSecondary = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 divide-x divide-neutral-200 border border-y border-neutral-200 md:grid-cols-2 dark:divide-neutral-800 dark:border-neutral-800">
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Agent studio
              </h2>
              <CardDescription>
                Design, launch and customize AI agents for marketing, sales,
                support and ops, built around your workflows.
              </CardDescription>
            </CardContent>
            <CardSekeleton>
              <SkeletonOne />
            </CardSekeleton>
          </div>

          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Multi-Agent Orchestration
              </h2>
              <CardDescription>
                Coordinate multiple agents across workflows using memory,
                interrupts, and conditional logic.
              </CardDescription>
              <CardSekeleton></CardSekeleton>
            </CardContent>
          </div>
        </div>
      </Container>
    </section>
  );
};



export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4 md:p-8">{children}</div>;
};

export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="mt-2 max-w-md text-balance text-neutral-600 dark:text-neutral-400">
      {children}
    </p>
  );
};

export const CardSekeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-80 flex-col overflow-hidden perspective-distant sm:h-60 md:h-80",
        className,
      )}
    >
      {children}
    </div>
  );
};
