"use client";

import Link from "next/link";
import { Container } from "./container";
import { NewLogo } from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
  const navlinks = [
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Process",
      href: "/process",
    },
    {
      name: "Our Work",
      href: "/our-work",
    },
    {
      name: "FAQ's",
      href: "/faq",
    },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="flex items-center justify-between py-4">
        <NewLogo />
        <div className="flex items-center gap-4">
          {navlinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"/"}
            className="inline-block rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400"
          >
            X
          </Link>
          <Button>Book a slot</Button>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
