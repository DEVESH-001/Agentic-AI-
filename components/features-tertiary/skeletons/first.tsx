"use client";

import {
  FifthIcon,
  FirstIcon,
  FourthIcon,
  RecentActivityIcon,
  SecondIcon,
  ThirdIcon,
} from "@/icons/bento-icons";
import { cn } from "@/lib/utils";
import { IconClock } from "@tabler/icons-react";
import { motion } from "motion/react";

export const SkeletonOne = () => {
  const cardItems = [
    {
      title: "Personalized Email",
      description: "Personalized Email sent to ••••• @gmail.com",
      icon: <FirstIcon />,
      iconClassName: "bg-blue-500",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-500">15s</p>
        </div>
      ),
    },
    {
      title: "Peer Review",
      description: "Reviewed and approved 2 outputs for quality",
      icon: <SecondIcon />,
      iconClassName: "bg-red-500",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-red-200 bg-red-100 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-red-500">FAILED</p>
        </div>
      ),
    },
    {
      title: "Content Drafting",
      description: "Generated draft campaign brief",
      icon: <ThirdIcon />,
      iconClassName: "bg-green-500",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-orange-200 bg-orange-100 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
    {
      title: "Admin Approval",
      description: "Final approval of marketing copy b",
      icon: <FourthIcon />,
      iconClassName: "bg-yellow-500",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-orange-200 bg-orange-100 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-orange-500">PROCESSING</p>
        </div>
      ),
    },
    {
      title: "Weekly Campaign Report",
      description: "Generated campaign performance ",
      icon: <FifthIcon />,
      iconClassName: "bg-pink-500",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-neutral-500">2m</p>
        </div>
      ),
    },
    {
      title: "Price Monitoring Agent",
      description: "Monitored competitor prices for changes",
      icon: <ThirdIcon />,
      iconClassName: "bg-blue-500",
      badge: (
        <div className="flex items-center gap-1 rounded-md border border-green-200 bg-green-100 px-1 py-0.5">
          <IconClock className="size-3" />
          <p className="text-[10px] font-bold text-green-500">SUCCESS</p>
        </div>
      ),
    },
  ];
  return (
    <div className="absolute inset-x-10 inset-y-2 mx-auto flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-neutral-100 p-2 px-2">
      <Card>
        {cardItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            <CardItem
              key={item.title}
              icon={item.icon}
              iconClassName={item.iconClassName}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          </motion.div>
        ))}
      </Card>
    </div>
  );
};

const CardItem = ({
  icon,
  iconClassName,
  title,
  description,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  iconClassName?: string;
}) => {
  return (
    <>
      {/*  Card Content */}
      <div className="relative flex w-full items-center justify-between overflow-hidden pl-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex size-4 items-center justify-center rounded-sm bg-purple-500 text-white",
              iconClassName,
            )}
          >
            {icon}
          </div>
          <p className="text-sm text-neutral-600">{title}</p>
          {badge}
        </div>
        <p className="w-full max-w-[16rem] flex-nowrap text-left text-sm whitespace-nowrap text-neutral-500">
          {description}
        </p>
      </div>
    </>
  );
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col items-start gap-4 rounded-3xl border border-transparent bg-white ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800">
      <div className="flex w-full items-center gap-2 border-b px-4 py-2 pb-2">
        <RecentActivityIcon />
        <p className="text-sm font-bold text-neutral-800">Recent Activity</p>
      </div>
      {children}
    </div>
  );
};
