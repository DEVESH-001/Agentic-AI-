"use client";

import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Container } from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";

export const Pricing = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-32">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <SubHeading className="mt-2">
            Trusted by 500+ enterprise companies
          </SubHeading>
          <Heading>
            Affordable pricing. <br /> Easy scaling.
          </Heading>
          <SubHeading className="mt-4">
            Start small to explore automation, add agents as you scale, and
            unlock enterprise-grade guardrails, orchestration, and reporting
            when you're ready
          </SubHeading>
          {/* `*:` is a special syntax for applying styles to all child elements */}
          <ul className="mt-4 flex list-none flex-col gap-2 *:flex *:items-center *:gap-2">
            <li>
              <LockIcon />
              <p>Built-in Guardrails</p>
            </li>
            <li>
              <HumanIcon />
              <p>Agent Orchestration</p>
            </li>
            <li>
              <Human2Icon />
              <p>Human-in-the-Loop</p>
            </li>
          </ul>
        </div>

        {/* Price Card*/}
        <div className="flex flex-col gap-4">
          <PricingCard
            price="10"
            ctaLink="#"
            ctaText="Start Building For Free"
            description="Perfect for individuals or small teams exploring automation."
            steps={[
              "1 AI Agent Included",
              "Standard Integrations",
              "Basic Approval Flows",
              "7 Day activity logs",
            ]}
          />
          <PricingCard
            price="60"
            ctaLink="#"
            ctaText="Contact Sales"
            description="Ideal for growing teams ready to scale automation safely."
            steps={[
              "Upto 5 AI Agents",
              "Multi Agent Orchestration",
              "Advanced Approval Flows",
              "30 Day activity logs",
              "ROI Insights",
            ]}
          />
        </div>
      </Container>
    </section>
  );
};

const PricingCard = ({
  price,
  ctaLink,
  ctaText,
  description,
  steps,
}: {
  price: string;
  ctaLink: string;
  ctaText: string;
  description: string;
  steps: string[];
}) => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-10 rounded-2xl bg-neutral-100 p-4 md:grid-cols-2 md:p-8">
        <div>
          <Heading>
            ${price}
            <span className="text-sm text-neutral-400 md:text-xl lg:text-3xl">
              /mo
            </span>
          </Heading>
            <SubHeading className="mt-4 ">{description}</SubHeading>
          <Button className="mt-4" asChild>
            <Link href={ctaLink || "#"}>{ctaText}</Link>
          </Button>
        </div>
        {/* Features List */}
        <ul className="mt-4 flex list-none flex-col gap-2 *:flex *:items-center *:gap-2 *:font-medium">
          {steps &&
            steps.map((step, index) => <Steps key={index} title={step} />)}
        </ul>
      </div>
    </>
  );
};

const Steps = ({ title }: { title: string }) => {
  return (
    <li>
      <IconCircleCheckFilled className="size-5 text-neutral-500" />
      <p className="text-sm md:text-base">{title}</p>
    </li>
  );
};

// icons

export const LockIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 4C4.05921 4 3.5 4.55921 3.5 5.25V6.75C3.5 7.16421 3.16421 7.5 2.75 7.5C2.33579 7.5 2 7.16421 2 6.75V5.25C2 3.73079 3.23079 2.5 4.75 2.5H6.75C7.16421 2.5 7.5 2.83579 7.5 3.25C7.5 3.66421 7.16421 4 6.75 4H4.75Z"
        fill="currentColor"
        fillOpacity="0.4"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 3.25C10.5 2.83579 10.8358 2.5 11.25 2.5H13.25C14.7692 2.5 16 3.73079 16 5.25V6.75C16 7.16421 15.6642 7.5 15.25 7.5C14.8358 7.5 14.5 7.16421 14.5 6.75V5.25C14.5 4.55921 13.9408 4 13.25 4H11.25C10.8358 4 10.5 3.66421 10.5 3.25Z"
        fill="currentColor"
        fillOpacity="0.4"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.25 11.5C15.6642 11.5 16 11.8358 16 12.25V13.75C16 15.2692 14.7692 16.5 13.25 16.5H11.25C10.8358 16.5 10.5 16.1642 10.5 15.75C10.5 15.3358 10.8358 15 11.25 15H13.25C13.9408 15 14.5 14.4408 14.5 13.75V12.25C14.5 11.8358 14.8358 11.5 15.25 11.5Z"
        fill="currentColor"
        fillOpacity="0.4"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 11.5C3.16421 11.5 3.5 11.8358 3.5 12.25V13.75C3.5 14.4408 4.05921 15 4.75 15H6.75C7.16421 15 7.5 15.3358 7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5H4.75C3.23079 16.5 2 15.2692 2 13.75V12.25C2 11.8358 2.33579 11.5 2.75 11.5Z"
        fill="currentColor"
        fillOpacity="0.4"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7C8 6.44821 8.44821 6 9 6C9.55179 6 10 6.44821 10 7V8H8V7ZM6.5 8.06304V7C6.5 5.61979 7.61979 4.5 9 4.5C10.3802 4.5 11.5 5.61979 11.5 7V8.06304C12.3623 8.28508 13 9.06797 13 10V11.5C13 12.6048 12.1041 13.5 11 13.5H7C5.89594 13.5 5 12.6048 5 11.5V10C5 9.06797 5.63767 8.28508 6.5 8.06304Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const HumanIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.2371 13.5386L15.3426 12.9077L14.7113 11.0132C14.6092 10.7075 14.3226 10.5005 13.9999 10.5005C13.6772 10.5005 13.3905 10.7075 13.2885 11.0132L12.6572 12.9077L10.7627 13.5386C10.4565 13.6411 10.25 13.9273 10.25 14.2505C10.25 14.5737 10.4565 14.8599 10.7627 14.9624L12.6572 15.5933L13.2885 17.4878C13.3906 17.7935 13.6772 18.0005 13.9999 18.0005C14.3226 18.0005 14.6093 17.7935 14.7113 17.4878L15.3426 15.5933L17.2371 14.9624C17.5433 14.8599 17.7498 14.5737 17.7498 14.2505C17.7498 13.9273 17.5433 13.6411 17.2371 13.5386Z"
        fill="currentColor"
      ></path>
      <path
        d="M11.6151 11.2895C10.474 10.0372 8.83022 9.24951 6.9996 9.24951C4.56053 9.24951 2.45281 10.6468 1.42431 12.681C0.804978 13.9059 1.47762 15.3468 2.71358 15.776C3.80672 16.1556 5.26759 16.5005 6.9996 16.5005C8.05815 16.5005 9.01554 16.3716 9.84957 16.1848C9.17828 15.7855 8.74973 15.0565 8.74973 14.2505C8.74973 13.2811 9.36968 12.423 10.2863 12.1162L11.4711 11.7216L11.6151 11.2895Z"
        fill="currentColor"
        fillOpacity="0.4"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 5.25049C4.25 3.7313 5.48133 2.50049 7 2.50049C8.51867 2.50049 9.75 3.7313 9.75 5.25049C9.75 6.76968 8.51867 8.00049 7 8.00049C5.48133 8.00049 4.25 6.76968 4.25 5.25049Z"
        fill="currentColor"
        fillOpacity="0.4"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5498 7.58782C10.9707 7.84943 11.4675 8.00049 11.9995 8.00049C13.5182 8.00049 14.7495 6.76968 14.7495 5.25049C14.7495 3.7313 13.5182 2.50049 11.9995 2.50049C11.4675 2.50049 10.9707 2.65155 10.5498 2.91315C10.9921 3.58366 11.2495 4.38692 11.2495 5.25049C11.2495 6.11405 10.9921 6.91732 10.5498 7.58782Z"
        fill="currentColor"
        fillOpacity="0.4"
      ></path>
    </svg>
  );
};

export const Human2Icon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.4"
        d="M14.7617 0.831335C14.2993 0.504635 13.7036 0.423631 13.1714 0.612135C9.7407 1.83043 6.2608 1.82993 2.8281 0.612635C2.2954 0.425131 1.6997 0.505735 1.2378 0.832335C0.7759 1.15853 0.5 1.69123 0.5 2.25713V11.0017C0.5 11.5676 0.7759 12.1008 1.2383 12.427C1.7002 12.7532 2.2945 12.8337 2.8281 12.6462C6.2607 11.4294 9.7407 11.4289 13.1714 12.6467C13.3613 12.7136 13.5586 12.7468 13.7549 12.7468C14.1109 12.7468 14.4639 12.6379 14.7617 12.4275C15.2241 12.1013 15.5 11.5681 15.5 11.0022V2.25663C15.5 1.69073 15.2241 1.15753 14.7617 0.831335Z"
        fill="currentColor"
      ></path>
      <path
        d="M8 9C9.2426 9 10.25 7.99264 10.25 6.75C10.25 5.50736 9.2426 4.5 8 4.5C6.75736 4.5 5.75 5.50736 5.75 6.75C5.75 7.99264 6.75736 9 8 9Z"
        fill="currentColor"
      ></path>
      <path
        d="M12.4626 14.0649C12.0075 11.999 10.1311 10.5 8.00016 10.5C5.86926 10.5 3.99286 11.999 3.53776 14.0654C3.35366 14.9038 3.87756 15.7622 4.73066 16.0195C5.79026 16.3383 6.89036 16.5 8.00016 16.5C9.10568 16.5 10.2053 16.3384 11.2692 16.0195C12.1232 15.7627 12.6471 14.9043 12.4626 14.0649Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
