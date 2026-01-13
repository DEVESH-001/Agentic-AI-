"use client";

import {
  CogIcon,
  GoogleSheetsIcon,
  HubspotIcon,
  SalesForceIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import {
  IconFeatherFilled,
  IconFileDotsFilled,
  IconFilter2Search,
  IconPointerUp,
} from "@tabler/icons-react";
import { motion, px } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const SkeletonFour = () => {
  const items = [
    {
      title: "Brand & Style",
      icons: <IconFileDotsFilled className="size-4 text-blue-500" />,
      className: "bg-blue-100 border-blue-200 border",
      description:
        "Link CRMs, helpdesks, and APIs to give agents secure, role-based access.",
      tags: [
        { text: "Admin", icon: <CogIcon className="size-3" /> },
        { text: "Editor", icon: <CogIcon className="size-3" /> },
        { text: "Viewer", icon: <CogIcon className="size-3" /> },
      ],
    },
    {
      title: "Compliance & Policy",
      icons: <IconFeatherFilled className="size-4 text-green-500" />,
      className: "bg-green-100 border-green-200 border",
      description:
        "Ensure your AI agents follow company policies and regulatory requirements with built-in compliance controls.",
      tags: [
        { text: "Zapier", icon: <HubspotIcon className="size-3" /> },
        { text: "Integromat", icon: <SalesForceIcon className="size-3" /> },
        { text: "Custom API", icon: <GoogleSheetsIcon className="size-3" /> },
      ],
    },
    {
      title: "Content Saftety Filters",

      icons: <IconFeatherFilled className="size-4 text-purple-500" />,
      className: "bg-purple-100 border-purple-200 border",
      description:
        "Protect your brand from harmful content with built-in safety filters that block sensitive or inappropriate material.",
      tags: [
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Salesforce", icon: <SalesForceIcon className="size-3" /> },
        { text: "Sheets", icon: <GoogleSheetsIcon className="size-3" /> },
      ],
    },
    {
      title: "Approval Triggers",
      icons: <IconPointerUp className="size-4 text-neutral-500" />,
      className: "bg-neutral-100 border-neutral-200 border",
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
      tags: [
        { text: "Google Analytics", icon: <HubspotIcon className="size-3" /> },
        { text: "Mixpanel", icon: <SalesForceIcon className="size-3" /> },
        {
          text: "Custom Reports",
          icon: <GoogleSheetsIcon className="size-3" />,
        },
      ],
    },
    {
      title: "Output Quality Checks",
      icons: <IconFilter2Search className="size-4 text-red-500" />,
      className: "bg-red-100 border-red-200 border",
      description:
        "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
      tags: [
        { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
        { text: "Salesforce", icon: <SalesForceIcon className="size-3" /> },
        { text: "Sheets", icon: <GoogleSheetsIcon className="size-3" /> },
      ],
    },
  ];

  const [selected, setSelected] = useState(items[0]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  // Autoplay interval reference(clear interval on component unmount)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  const startAutoplay = () => {
    stopAutoplay(); // clear any existing interval
    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % items.length; // loop back to first item
      setSelected(items[currentIndexRef.current]);
    }, 2000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <div className="mx-auto mt-4 mb-4 flex max-w-lg flex-wrap items-center justify-center gap-4">
        {items.map((item, index) => (
          <button
            onClick={() => setSelected(item)}
            key={index}
            className={cn(
              "relative flex cursor-pointer items-center justify-center gap-1 rounded-sm px-2 py-1 text-xs opacity-50 transition duration-200 active:scale-98",
              selected.title === item.title && "opacity-100",
              item.className,
            )}
          >
            {selected.title === item.title && (
              <motion.div
                layoutId="selected-item"
                className="absolute inset-0 rounded-[5px] shadow-inner"
              ></motion.div>
            )}
            {item.icons}
            {item.title}
          </button>
        ))}
      </div>

      <div className="absolute inset-x-0 mx-auto flex h-full w-full max-w-[20rem] flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2 lg:max-w-sm dark:bg-neutral-900">
        <Card
          topIcon={selected.icons}
          title={selected.title}
          description={selected.description}
          tags={selected.tags}
          bgColor={selected.className}
          className={selected.className}
        />
      </div>
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
  bgColor,
  className,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
  bgColor?: string;
  className?: string;
}) => {
  return (
    <motion.div
      key={title}
      className="flex flex-col items-start gap-4 rounded-3xl border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800"
    >
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "mt-1 flex size-6 shrink-0 items-center justify-center rounded-full",

            className,
          )}
        >
          {topIcon}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.1 }}
          className="text-lg font-bold text-neutral-800 dark:text-neutral-200"
        >
          {title}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-base text-neutral-600">Tone Guidelines</p>
        <p className="mt-2 mb-4 max-w-md rounded-sm border border-dashed border-neutral-200 px-2 py-1 text-sm text-balance text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              key={tag.text + idx}
            >
              <Tag key={tag.text + idx} text={tag.text} icon={tag.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>
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
