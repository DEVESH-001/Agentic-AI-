import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";

export const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
      }}
      className={cn(
        "mx-auto my-auto flex h-full w-full max-w-[85%] flex-col rounded-2xl border border-neutral-200 bg-neutral-100 p-3 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800",
        "perspective-distant",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
      )}
    >
      <div className="flex items-center gap-3">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-sm font-normal text-black dark:text-white">
          Campaign Planner
        </p>
      </div>
      <div className="relative inset-0 mt-4 flex-1 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-700">
        <Pattern />
        {/* this div is to cover the pattern in the center */}
        <div className="absolute inset-0 h-full w-full divide-y divide-neutral-200 bg-white">
          <Row
            icon={<IconCheck className="stroke-white text-green-500" />}
            text="Fetching Data"
            time="10s"
          />
          <Row
            icon={<IconCheck className="stroke-white text-green-500" />}
            text="Processing Data"
            time="20s"
            variant="success"
          />
          <Row
            icon={<IconCheck className="stroke-white text-green-500" />}
            text="Analyzing Data"
            time="30s"
          />
          <Row
            icon={<IconCheck className="stroke-white text-green-500" />}
            text="Waiting "
            time="40s"
          />
          <Row
            icon={<IconLoader2 className="animate-spin text-white" />}
            text="Generating Report"
            time="40s"
            variant="warning"
          />
        </div>
      </div>
    </div>
  );
};

const Row = ({
  icon,
  text,
  time,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  variant?: "success" | "warning" | "danger";
}) => {
  return (
    <>
      {/* container content status bar */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex size-3 items-center justify-center rounded-full",
              variant === "success" && "bg-green-500",
              variant === "warning" && "bg-yellow-500",
              variant === "danger" && "bg-red-500",
            )}
          >
            {icon}
          </div>
          <p className="text-sm font-medium text-neutral-500">{text}</p>
        </div>

        <div className="flex items-center gap-1 text-neutral-400">
          <IconRipple className="size-3" />
          <p className="text-[10px] font-bold">{time}</p>
        </div>
      </div>
    </>
  );
};

const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};
