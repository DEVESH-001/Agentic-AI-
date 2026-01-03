import { IconPlus } from "@tabler/icons-react";
import { Container } from "../container";
import Heading from "../heading";
import SubHeading from "../subheading";
import { Card, CardContent, CardCTA, CardSekeleton, CardTitle } from "./card";

const Features = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32">
      <div className="flex items-baseline-last justify-between gap-10">
        <Heading>
          Built For Fast Moving <br /> Teams That Need Control
        </Heading>
        <SubHeading>
          We build AI-powered agents that handle web development tasks, while
          you focus on approving their work. Fast, efficient, and hassle-free
          development.
        </SubHeading>
      </div>

      {/* Feature cards */}
      <div className="my-10 grid grid-cols-1 gap-4 md:my-20 md:grid-cols-3">
        <Card className="rounded-tl-3xl rounded-bl-3xl">
          <CardSekeleton></CardSekeleton>
          <CardContent>
            <CardTitle>Prebuilt Agents, Tuned for Your Workflow</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card>
          <CardSekeleton></CardSekeleton>
          <CardContent>
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
            <CardCTA>
              <IconPlus />
            </CardCTA>
          </CardContent>
        </Card>
        <Card className="rounded-tr-3xl rounded-br-3xl">
          <CardSekeleton></CardSekeleton>
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
