import { Container } from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import LandingImages from "./landing-images";

export const Outcomes = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading>
          Governed AI, <br /> Trusted Outcomes
        </Heading>

        <SubHeading className="py-8">
          Deploy AI agents with built-in approvals, brand guardrails, and audit
          trails. Every step is visible, reviewable, and compliant.
        </SubHeading>

        <LandingImages
          firstImageSrc={"https://assets.aceternity.com/screenshots/3.jpg"}
          secondImageSrc={"https://assets.aceternity.com/screenshots/4.jpg"}
        />
      </Container>
    </section>
  );
};
