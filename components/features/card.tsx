import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn("rounded-lg bg-neutral-100 dark:bg-neutral-800", className)}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("font-display text-lg font-bold md:text-2xl", className)}>
      {children}
    </h3>
  );
};

export const CardContent = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-4 pb-6 md:px-8 md:pb-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "flex size-5 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition duration-200 active:scale-[0.98] md:size-10 dark:border-neutral-800",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
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
    <div className={cn("min-h-40 md:min-h-80", className)}>{children}</div>
  );
};
