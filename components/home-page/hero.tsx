// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/components/home-page/landing.svg";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="#">
              SignIn and get a free trial with 𝙲𝚞𝚝𝚎𝙰𝙸 <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
          <Balancer>
  <p style={{ fontFamily: 'Dancing Script, cursive' }}>
    Why to use <span className="font-bold bg-transparent">𝙲𝚞𝚝𝚎𝙰𝙸</span>
  </p>
</Balancer>

          </h1>
          <h3 className="text-muted-foreground">

<Balancer>
  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-white w-full">
    
    <p className="text-lg leading-relaxed mb-2 hover:translate-x-2 transition-transform duration-300 break-normal" style={{ fontFamily: 'Dancing Script, cursive' }}>
      Globally, people use it for tasks like content generation, learning, and technical assistance.
    </p>
    <p className="text-lg leading-relaxed hover:translate-x-2 transition-transform duration-300 break-normal" style={{ fontFamily: 'Dancing Script, cursive' }}>
      It is growing adoption helps individuals and businesses enhance productivity and communication.
    </p>
  </div>
</Balancer>

          </h3>
          

<div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl transition-transform duration-500 ease-linear hover:scale-105 hover:rotate-3">
  <Image
    src={Placeholder}
    alt="placeholder"
    className="h-full w-full object-cover"
  />
</div>






        </div>
      </Container>
    </Section>
  );
};

export default Hero;
