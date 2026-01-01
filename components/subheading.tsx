import { cn } from "@/lib/utils";

const SubHeading = ({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "max-w-xl font-display font-inter text-base text-neutral-400 md:text-lg lg:text-lg dark:text-neutral-600",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default SubHeading;
