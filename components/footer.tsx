import Link from "next/link";
import { Container } from "./container";
import { Logo2 } from "./logo";
import SubHeading from "./subheading";
import { Button } from "./ui/button";
import { IconSend } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const product = [
    {
      title: "Agent Simulator",
      href: "#",
    },
    {
      title: "AI Workflows",
      href: "#",
    },
    {
      title: "Agent Builder",
      href: "#",
    },
    {
      title: "Analytics Dashboard",
      href: "#",
    },
    {
      title: "API Integration",
      href: "#",
    },
    {
      title: "Enterprise Solutions",
      href: "#",
    },
  ];
  const company = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Press",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 py-10 perspective-distant md:py-20 lg:py-32 dark:border-neutral-800">
      <Container className="relative z-20 grid grid-cols-1 gap-10 md:grid-cols-5">
        <div className="col-span-2 flex flex-col items-start gap-4">
          <Logo2 />
          <SubHeading>Safe, observable, outcome-driven AI</SubHeading>
          <Button className="shadow-brand">Start a 30-day trial</Button>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-600 dark:text-neutral-200">
            Product
          </h4>
          <ul className="flex list-none flex-col gap-2">
            {product.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-600 transition duration-200 hover:text-black dark:text-neutral-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-600 dark:text-neutral-200">
            Company
          </h4>
          <ul className="flex list-none flex-col gap-2">
            {company.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-600 transition duration-200 hover:text-black dark:text-neutral-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400 dark:text-neutral-200">
            Newsletter
          </h4>
          <div className="order flex items-center justify-around rounded-md border-neutral-100 bg-neutral-100 p-px">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 text-sm text-neutral-600 placeholder-neutral-400 outline-none"
            />
            <button className="rounded-md bg-black px-4 py-2 text-sm text-white">
              <IconSend className="size-4 text-white" />
            </button>
          </div>
          <p className="text-sm text-neutral-500">
            Get the latest product news and behind the scenes updates.
          </p>
        </div>
      </Container>

      <Container className="relative z-20 mt-10 flex flex-col justify-between sm:flex-row">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} StackMint. All rights reserved.
        </p>
        <div className="flex items-center gap-4 *:text-sm *:text-neutral-500">
          <Link href="#" className="text-sm">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm">
            Terms of Service
          </Link>
        </div>
      </Container>

      <div
        className={cn(
          "flex h-[200%] items-center justify-center gap-20",
          "absolute -inset-x-[150%] -inset-y-40",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,var(--color-neutral-100),transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100),transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,var(--color-neutral-700)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-700)_1px,transparent_1px)]",
          "mask-radial-from-50%",
        )}
        style={{
          transform: "rotateX(60deg)",
        }}
      />
    </footer>
  );
};
