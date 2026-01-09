import { Container } from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";

import LandingImages from "./landing-images";

const Speed = () => {
  return (
    <section className="relative py-10 md:py-20 lg:py-10">
      <Container>
        <Heading>
          Built for Speed <br /> Designed for Scale
        </Heading>

        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </SubHeading>

        <LandingImages />
      </Container>
    </section>
  );
};

export default Speed;
