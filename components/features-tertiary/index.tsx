"use client";
import { motion } from "motion/react";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";

import { HumanInLoopIcon, IntegrationIcon, WorkFlowIcon } from "@/icons";
import SkeletonTwo from "./skeletons/second";

export const FeaturesTertiary = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 divide-x divide-y divide-neutral-200 border-t border-b border-neutral-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:divide-neutral-800 dark:border-t dark:border-b dark:border-neutral-800">
          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Audit Trail
              </h2>
              <CardDescription>
                Tracks every agent action with full input-output visibility and
                timestamps.
              </CardDescription>
            </CardContent>
            <CardSekeleton>
              <SkeletonOne />
            </CardSekeleton>
          </div>

          <div>
            <CardContent>
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Role-Based Access
              </h2>
              <CardDescription>
                Controls who can launch, review, or manage agents based on
                roles.
              </CardDescription>
              <CardSekeleton>
                <SkeletonTwo />
              </CardSekeleton>
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
