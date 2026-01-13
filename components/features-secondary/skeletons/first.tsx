"use client";

import {
  CogIcon,
  FileIcon,
  GoogleSheetsIcon,
  HubspotIcon,
  HumanIcon,
  SalesForceIcon,
} from "@/icons";
import { cn } from "@/lib/utils";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const SkeletonOne = () => {
  type item = {
    topIcon: React.ReactNode;
    title: string;
    description: string;
    tags: { text: string; icon: React.ReactNode }[];
  };
  const items = [
    {
      topIcon: <FileIcon className="size-4" />,
      title: "Connect Data",
      description:
        "Integrate with various data sources to centralize information.",
      tags: [
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Salesforce", icon: <SalesForceIcon className="size-3" /> },
        { text: "Sheets", icon: <GoogleSheetsIcon className="size-3" /> },
      ],
    },
    {
      topIcon: <HumanIcon className="size-4" />,
      title: "Human-in-the-Loop",
      description:
        "Add reviews, approvals and escalations without slowing work.",
      tags: [
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Salesforce", icon: <SalesForceIcon className="size-3" /> },
        { text: "Sheets", icon: <GoogleSheetsIcon className="size-3" /> },
      ],
    },
    {
      topIcon: <CogIcon className="size-4" />,
      title: "Define Processing Logic",
      description:
        "Create workflows, decision points, and conditional actions for each task.",
      tags: [
        { text: "Hubspot", icon: <CogIcon className="size-3" /> },
        { text: "Salesforce", icon: <SalesForceIcon className="size-3" /> },
        { text: "Sheets", icon: <GoogleSheetsIcon className="size-3" /> },
      ],
    },
    {
      topIcon: <HumanIcon className="size-4" />,
      title: "Human-in-the-Loop",
      description:
        "Create workflows, decision points, and conditional actions for each task.",
      tags: [
        { text: "Hubspot", icon: <CogIcon className="size-3" /> },
        { text: "Salesforce", icon: <SalesForceIcon className="size-3" /> },
        { text: "Sheets", icon: <GoogleSheetsIcon className="size-3" /> },
      ],
    },
  ];

  const ref = useRef<HTMLDivElement>(null); //we use ref to check if the element is in view
  const isInView = useInView(ref);

  const [activeCards, setActiveCards] = useState<item[]>([]);

  useEffect(() => {
    if (!isInView) return;

    // Reset active cards when animation starts
    setActiveCards([]);

    const interval = setInterval(() => {
      setActiveCards((prev) => {
        if (prev.length >= items.length) {
          clearInterval(interval); // Clear interval when all cards are active
          return prev;
        }
        return [items[prev.length], ...prev]; // Add the next item to the active cards
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
      layout
      ref={ref}
      className="absolute inset-x-0 mx-auto flex h-full w-full max-w-[20rem] flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2 lg:max-w-sm dark:bg-neutral-900"
    >
      {activeCards.map((item, index) => (
        <Card key={index?.toString()} {...item} />
      ))}
    </motion.div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
}) => {
  const colors = [
    "var(--color-blue-500)",
    "var(--color-green-500)",
    "var(--color-red-500)",
  ];
  // Use title to deterministically pick a color
  const colorIndex = title.charCodeAt(0) % colors.length;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-start gap-4 rounded-3xl border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800"
    >
      <div
        className={cn(
          "mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-500",
        )}
        style={{
          backgroundColor: colors[colorIndex],
        }}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
          {title}
        </p>
        <p className="mt-1 max-w-md text-balance text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-100"></p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag.text} text={tag.text} icon={tag.icon} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-sm border border-neutral-100 px-1 py-0.5 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
