// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";

const CTA = () => {
  return (
    <Section className="px-4">
      {/* <Container className="flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12">
        <h2 className="!my-0">What are you waiting For ?</h2>
        <h3 className="!mb-0 text-muted-foreground">
          <Balancer>
          Click on the Get Started button to begin with the CuteAI Plateform. Ask any question, explore topics, or get assistance in real-time! 
          </Balancer>
        </h3>
        <div className="not-prose mx-auto flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="#">Get Started</Link>
          </Button>
          <Button className="w-fit" variant="link" asChild>
            <Link href="#">Learn More {"->"}</Link>
          </Button>
        </div>
      </Container> */}

<Container className="flex flex-col items-center gap-6 rounded-lg border border-transparent bg-pink-500 p-6 text-center shadow-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 hover:border-white hover:shadow-2xl md:rounded-xl md:p-12">
  <h2 className="!my-0 text-3xl font-bold text-white ">What are you waiting for?</h2>
  <h3 className="!mb-0 text-white text-lg leading-relaxed md:text-2xl font-extrabold tracking-wide">
    <Balancer>
      Click on the Get Started button to begin with the CuteAI Platform. Ask any question, explore topics, or get assistance in real-time!
    </Balancer>
  </h3>
  <div className="not-prose mx-auto flex items-center gap-2">
    <Button className="w-fit" asChild>
      <Link href="#">Get Started</Link>
    </Button>
    <Button className="w-fit" variant="link" asChild>
      <Link href="#">Learn More {"->"}</Link>
    </Button>
  </div>
</Container>








    </Section>
  );
};

export default CTA;
