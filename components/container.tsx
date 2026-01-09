//container: is a simple wrapper component that centers content and sets a max width. useful for layouts like navbar, footers, and main content areas.

import { cn } from "@/lib/utils";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 md:px-8", className)}>
      {children}
    </div>
  );
};
