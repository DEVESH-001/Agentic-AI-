import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";

export const SkeletonOne = () => {
  return (
    <div
      className={cn(
        "h-full w-full max-w-[85%] -translate-y-10 scale-[1.2] rotate-x-30 -rotate-y-20 rotate-z-15 mask-r-from-50% mask-radial-from-50% perspective-distant",
      )}
    >
      <SkeletonCard
        className="absolute bottom-0 left-12 z-30 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="danger" text="120s" />}
      />
      <SkeletonCard
        className="absolute bottom-10 left-8 z-20 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Issue Tracker"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="success" text="10s" />}
      />
      <SkeletonCard
        className="absolute bottom-20 left-4 z-10 max-w-[80%]"
        icon={<IconPrison className="size-4" />}
        title="Risk Analysis"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge variant="warning" text="40s" />}
      />
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
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
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
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Tag text="Google Ads" />
        <Tag text="Facebook Ads" />
        <Tag text="Content Ads" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="rounded-sm bg-neutral-200 px-2 py-1 text-xs dark:bg-neutral-700">
      {text || "Marketing"}
    </div>
  );
};

const Badge = ({
  variant,
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-1 rounded-full px-1 py-0.5",
        variant === "danger" &&
          "border border-red-300 bg-red-300/10 text-red-500",
        variant === "success" &&
          "border border-green-300 bg-green-300/10 text-green-500",
        variant === "warning" &&
          "border border-yellow-300 bg-yellow-300/10 text-yellow-600",
      )}
    >
      <IconClock className={cn("size-3")} />
      <IconRipple className={cn("size-3")} />
      <p className="text-[10px] font-bold">{text}</p>
    </div>
  );
};
