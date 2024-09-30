// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/components/home-page/un.svg";

const FeatureLeft = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        {/* <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="h-full w-full object-cover"
          />
        </div> */}

<div className="not-prose relative flex h-96 overflow-hidden rounded-lg border group">
  <Image
    src={Placeholder}
    alt="placeholder"
    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
    <p className="text-white transition-colors text-xl font-semibold">
      Glad that you are thinking for Pro!
    </p>
  </div>
</div>





<div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
  <div className="flex flex-col gap-6 py-8">
    <h3 className="!my-0 text-3xl font-bold">
       Upgrade to <span >Pro</span>🚀✨ 
    </h3>
    <p className="font-light leading-[1.4] opacity-70 text-lg hover:animate-bounce" style={{ fontFamily: 'Dancing Script, cursive', transition: 'transform 30s ease' }}>
      Upgrade to Pro for enhanced features and faster response times. Unlock advanced tools and get priority support for a seamless 𝙲𝚞𝚝𝚎𝙰𝙸 experience!
    </p>
    <div className="not-prose flex items-center gap-2">
      <Button className="w-fit" asChild>
        <Link href="#">Get Started</Link>
      </Button>
      <Button className="w-fit" variant="link" asChild>
        <Link href="#">Learn More {"->"}</Link>
      </Button>
    </div>
  </div>
</div>

      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureLeft;
