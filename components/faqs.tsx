"use client";
import { FaqIllustration } from "@/illustrations/general";
import { Container } from "./container";
import Heading from "./heading";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const FAQs = () => {
  const questions = [
    {
      question: "What is Agenforce AI?",
      answer: "Agenforce AI is a platform for building and managing AI agents.",
    },
    {
      question: "Who is Agenforce AI built for?",
      answer:
        "Agenforce AI is built for developers, data scientists, and business owners who want to build and manage AI agents .",
    },
    {
      question: "What is the pricing for Agenforce AI?",
      answer:
        "Agenforce AI is available on a freemium basis. You can start using Agenforce AI for free, and upgrade to a paid plan as your needs grow.",
    },
    {
      question: "How does Agenforce AI work?",
      answer: "Agenforce AI is a platform for building and managing AI agents.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial so you can explore all features before committing to a plan.",
    },
  ];
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-32">
      <Container>
        <FaqIllustration />
        <Heading className="my-10 md:my-20">Frequently Asked Questions</Heading>

        <div className="flex flex-col gap-4">
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full cursor-pointer overflow-hidden rounded-3xl bg-neutral-100 p-4 text-left transition-all duration-200 md:p-8"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold md:text-2xl">
          {question}
        </h3>
        <div className="relative flex size-6 items-center justify-center rounded-full bg-black">
          <IconMinus
            className={cn(
              "absolute inset-0 size-6 text-white transition-all duration-200",
              open && "scale-0 rotate-90",
            )}
          />
          <IconPlus
            className={cn(
              "absolute inset-0 size-6 text-white transition-all duration-200",
              !open && "inset-0 scale-0 -rotate-90",
            )}
          />
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        exit={{ height: 0, opacity: 0 }}
        className="overflow-hidden"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          key={String(open)}
          className="mt-4 text-left text-neutral-600"
        >
          {answer}
        </motion.p>
      </motion.div>
    </button>
  );
};
