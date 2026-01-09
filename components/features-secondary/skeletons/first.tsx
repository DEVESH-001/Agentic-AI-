"use client";

import {
  CogIcon,
  FileIcon,
  GoogleSheetsIcon,
  HubspotIcon,
  SalesForceIcon,
} from "@/icons";
import { motion } from "motion/react";

export const SkeletonOne = () => {
  return (
    <div className="absolute inset-x-0 mx-auto h-full w-full max-w-sm flex-1 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2 dark:bg-neutral-900">
      <Card
        topIcon={<FileIcon className="size-6" />}
        title="Connect Data"
        description="Integrate with various data sources to centralize information."
        tags={[
          { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
          { text: "Salesforce", icon: <SalesForceIcon className="size-3" /> },
          { text: "Sheets", icon: <GoogleSheetsIcon className="size-3" /> },
        ]}
      />
      <Card
        topIcon={<CogIcon className="size-6" />}
        title="Connect Data"
        description="Integrate with various data sources to centralize information."
        tags={[
          { text: "Hubspot", icon: <HubspotIcon className="size-3" /> },
          { text: "Salesforce", icon: <SalesForceIcon className="size-3" /> },
          { text: "Sheets", icon: <GoogleSheetsIcon className="size-3" /> },
        ]}
      />
     
    </div>
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
  return (
    <div className="flex items-start gap-4 rounded-[16px] border border-transparent bg-white p-4 ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-800">
      <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-500">
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
    </div>
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
