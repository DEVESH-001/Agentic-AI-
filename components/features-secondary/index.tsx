"use client";
import { motion } from "motion/react";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { HumanInLoopIcon, IntegrationIcon, WorkFlowIcon } from "@/icons";

export const FeaturesSecondary = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <div className="grid grid-cols-1 divide-y divide-neutral-200 border-t border-b border-neutral-200 md:grid-cols-2 md:divide-x md:divide-y-0 dark:divide-neutral-800 dark:border-t dark:border-b dark:border-neutral-800">
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
              <CardSekeleton className="mask-radius-from-50% mask-t-from-50%">
                <SkeletonTwo />
              </CardSekeleton>
            </CardContent>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-3">
          {/* Feature Cards */}
          <div>
            <div className="flex items-center gap-2">
              <WorkFlowIcon />
              <h3 className="text-lg font-bold text-neutral-600">
                Workflow Automation
              </h3>
            </div>
            <p className="mt-2 text-base text-neutral-600">
              Automate campaigns, tickets and CRM updates without manual
              handoffs.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <IntegrationIcon />
              <h3 className="text-lg font-bold text-neutral-600">
                Integration Fabric
              </h3>
            </div>
            <p className="mt-2 text-base text-neutral-600">
              Connect CRMs, service desks, data warehouses and cloud apps
              seamlessly.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <HumanInLoopIcon />
              <h3 className="text-lg font-bold text-neutral-600">
                Human-in-the-Loop
              </h3>
            </div>
            <p className="mt-2 text-base text-neutral-600">
              Add reviews, approvals and escalations without slowing work.
            </p>
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
