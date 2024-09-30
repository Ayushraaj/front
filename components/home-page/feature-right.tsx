// React and Next.js imports
"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Placeholder from "@/components/home-page/video.svg";
import { Bold } from "lucide-react";

const FeatureRight = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
          <h3 className="!my-0 s">Watch Our Latest Blogs! 🎥👀✨ </h3>
          <p className="text-lg leading-relaxed mb-2 hover:translate-x-2 transition-transform duration-300 break-normal" style={{ fontFamily: 'Dancing Script, cursive' }}>
  Join Us as We Unveil the Magic Behind Our Cutting-Edge 𝙲𝚞𝚝𝚎𝙰𝙸 platform
  Get Ready to Be Inspired by a New Era of Conversational Technology!
</p>

          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Check out here!</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>


        
        
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border group">
      {/* Image */}
      <Image
        src={Placeholder}
        alt="placeholder"
        className="w-full h-full fill object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-150"
      />

      {/* Confetti Party Effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none">
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
      </div>
      
      <style jsx>{`
        /* Party Confetti Keyframes */
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        /* Confetti Styles */
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: hsl(var(--hue), 100%, 50%);
          animation: confetti-fall 2s ease-out infinite;
          border-radius: 50%;
        }

        .confetti:nth-child(1) {
          left: 10%;
          animation-duration: 3s;
          --hue: 300;
        }

        .confetti:nth-child(2) {
          left: 30%;
          animation-duration: 2.5s;
          --hue: 60;
        }

        .confetti:nth-child(3) {
          left: 50%;
          animation-duration: 4s;
          --hue: 120;
        }

        .confetti:nth-child(4) {
          left: 70%;
          animation-duration: 2s;
          --hue: 180;
        }

        .confetti:nth-child(5) {
          left: 90%;
          animation-duration: 3.5s;
          --hue: 240;
        }
      `}</style>
    </div>
      </Container>
    </Section>
  );
};

export default FeatureRight;
