// Layout

"use client"
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Introducing Our Crew! 🚀👥",
    href: "/",
    description:
      "Our Creative Force Behind the 𝙲𝚞𝚝𝚎𝙰𝙸 Application With Passion and Expertise, They Bring Innovation to Every Conversation. Join Us in Celebrating Their Journey and Contributions to Our Team!",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Appreciative Customers 🙌❤️",
    href: "/",
    description:
      "Discover What Our Valued Clients Are Saying About Our Platform!🌟 Check out the fantastic feedback from those who are experiencing the magic of our 𝙲𝚞𝚝𝚎𝙰𝙸 application! 🌟",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Discover the Amazing Capabilities of Our 𝙲𝚞𝚝𝚎𝙰𝙸  Platform! ✨",
    href: "/",
    description:
      "Experience seamless and engaging dialogues that feel real with our 𝙲𝚞𝚝𝚎𝙰𝙸's natural conversations 🗣️, enjoy tailored responses that understand your unique needs 🎯, navigate effortlessly with a user-friendly interface 🖥️, receive support and assistance 24/7 ⏰, and benefit from continuous learning as our CuteAI evolves and improves with every interaction 📚.",
    cta: "Learn More",
  },
];

const FeatureSet = () => {
  return (
    <Section>
      <Container className="not-prose">
        <style>
          {`
          @keyframes border-light-up {
            0% { border-color: red; }
            14% { border-color: orange; }
            28% { border-color: yellow; }
            42% { border-color: green; }
            57% { border-color: cyan; }
            71% { border-color: blue; }
            85% { border-color: violet; }
            100% { border-color: red; }
          }

          .animate-border-light-up {
            animation: border-light-up 1.5s linear infinite;
          }
          `}
        </style>

        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-bold font-[Dancing Script] text-center transition-all duration-300 hover:scale-105 hover:rotate-2 hover:text-blue-700 hover:shadow-lg hover:shadow-pink-500/50">
            <Balancer>
              Unveiling Our Journey & Honoring Our Customers
            </Balancer>
          </h3>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(({ icon, title, description, href, cta }, index) => (
              <Link
                href={`${href}`}
                className={`flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 animate-border-light-up`}
                key={index}
              >
                <div className="grid gap-4">
                  {icon}
                  <h4 className="text-xl text-primary">{title}</h4>
                  <p className="text-base opacity-75">{description}</p>
                </div>
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold">
                    <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Link>
            ))}
          </div>

          <div>
            {singleFeatureText.map(({ icon, title, description, href, cta }, index) => (
              <Link
                href={`${href}`}
                className={`flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 animate-border-light-up`}
                key={index}
              >
                <div className="grid gap-4">
                  {icon}
                  <h4 className="text-xl text-primary">{title}</h4>
                  <p className="text-base opacity-75">{description}</p>
                </div>
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold">
                    <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureSet;
