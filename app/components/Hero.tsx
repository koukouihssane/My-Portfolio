/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import Typewriter from "typewriter-effect";
import Section from "./Section";
import { Flag } from "./icons/Flag";
import { FourtytwoIcon } from "./icons/FourtyTwoIcon";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-secondary/30 font-mono border hover:bg-accent/50 transition-colors border-accent-foreground p-1 px-1 py-0.5 rounded-sm text-primary",
        className
      )}
      {...props}
    ></span>
  );
};

const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Ihssane Koukou
        </h2>
        <h3 className="text-3xl font-caption items-start">
          <Typewriter
            options={{
              strings: ["Junior Front-end Developer"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 70,
            }}
          />
        </h3>
        <p className="text-base">
          I am a student at{" "}
          <Link href="https://www.1337.ma/">
            <Code className="inline-flex items-center gap-2">
              {" "}
              <FourtytwoIcon size={16} className="inline" /> Network
            </Code>
          </Link>
          {" ,"} currently looking for an internship opportunity to bring my
          skills to the next level. Living in{" "}
          <Code className="inline-flex items-center gap-2">
            {" "}
            <Flag size={16} className="inline" /> Morocco
          </Code>
          .
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="avatar.png"
          alt="avatar"
          className="w-full h-auto max-w-xs rounded-full bg-primary max-md:w-56"
        />
      </div>
    </Section>
  );
};

export default Hero;
