"use client";

import Link from "next/link";
import { Container } from "./container";
import { Button } from "./ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Logo, StackMintLogo } from "./logo";
import { AnimatePresence, motion } from "motion/react";

export const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
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
    <div className="relative flex justify-between px-4 py-2 md:hidden">
      <Logo />

      <button onClick={() => setOpen(!open)}>
        <IconLayoutSidebar className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(14px)",
              background: "transparent",
            }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 h-full w-full px-4 py-2"
          >
            <div className="flex justify-between">
              <Logo />
            </div>
            <button
              className="absolute top-2 right-2"
              onClick={() => setOpen(false)}
            >
              <IconX />
            </button>

            <div className="my-10 flex flex-col gap-6">
              {navlinks.map((link, index) => (
                <motion.div
                  key={index + link.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-medium text-neutral-600 dark:text-neutral-400"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-4">
              <Link
                href={"#"}
                className="inline-block rounded-md px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-200"
              >
                Login
              </Link>
              <Button>Book a slot</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar = () => {
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
    <Container className="hidden items-center justify-between py-4 lg:flex">
      <Logo />
      {/* <StackMintLogo /> */}
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
  );
};
