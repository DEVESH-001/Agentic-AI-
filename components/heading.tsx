import { cn } from "@/lib/utils";

const Heading = ({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default Heading;
