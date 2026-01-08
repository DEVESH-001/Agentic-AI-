import { Container } from "./container";
import Heading from "./heading";
import SubHeading from "./subheading";

import LandingImages from "./landing-images";

const Speed = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-10">
      <Heading>
        Built for Speed <br /> Designed for Scale
      </Heading>

      <SubHeading className="py-8">
        Deploy AI agents that plan, act through your tools, and report
        outcomes—without changing how your teams work.
      </SubHeading>

      <LandingImages
        showGradient={false}
      />
    </Container>
  );
};

export default Speed;
