import { IconPlus } from "@tabler/icons-react";
import { Container } from "../container";
import Heading from "../heading";
import SubHeading from "../subheading";
import { Card, CardContent, CardCTA, CardSekeleton, CardTitle } from "./card";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonTwo } from "./skeletons/second";

const Features = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32 relative">
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-baseline-last">
        <Heading className="text-center lg:text-left">
          Built For Fast Moving <br /> Teams That Need Control
        </Heading>
        <SubHeading className="mx-auto text-center lg:mx-0 lg:text-left">
          We build AI-powered agents that handle web development tasks, while
          you focus on approving their work. Fast, efficient, and hassle-free
          development.
        </SubHeading>
      </div>

      {/* Feature cards */}
      <div className="my-10 grid grid-cols-1 gap-4 md:my-20 lg:grid-cols-3">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSekeleton>
            <SkeletonOne />
          </CardSekeleton>
          <CardContent>
            <CardTitle>Prebuilt Agents, Tuned for Your Workflow</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card>
          <CardSekeleton>
            <SkeletonTwo />
          </CardSekeleton>
          <CardContent>
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSekeleton>
            <SkeletonThree />
          </CardSekeleton>
          <CardContent>
            <CardTitle>Approvals, Gurdrails,and Full Auditablity</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Features;
