import { Container } from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";
import { Button } from "./ui/button";
import LandingImages from "./landing-images";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1">
          Agents that do the work <br /> Approvals that keep things moving
        </Heading>

        <SubHeading className="py-8">
          We build AI-powered agents that handle web development tasks, while
          you focus on approving their work. Fast, efficient, and hassle-free
          development.
        </SubHeading>

        <div className="flex items-center gap-6">
          <Button className="shadow-brand">Start Building For Free</Button>
          <Button asChild variant={"outline"}>
            <Link href={"#"}>Give Star To Repo</Link>
          </Button>
        </div>

        <LandingImages />
      </Container>
    </section>
  );
};

export default Hero;
