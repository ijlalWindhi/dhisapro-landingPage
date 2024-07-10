"use client";
import React, { useRef } from "react";
import Section from "./Section";
import {
  BackgroundCircles,
  BottomLine,
} from "@/components/fragments/landing-page/BackgroundCircles";
import Image from "next/image";

function Hero() {
  // define variables
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative mx-auto" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1>Transform Ideas into Reality</h1>
          <h2 className="h1 mb-6">
            Digitize your business to achieve company goals with {` `}
            <span className="inline-block relative">
              Dhisa Production{" "}
              <Image
                src="/images/curve.png"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h2>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            &quot;Innovation for a Digital Future&quot; With diverse and
            comprehensive services, Dhisa Production (DhisaPro) is ready to help
            your business develop and innovate in an ever-changing digital
            world.
          </p>
          {/* <Button href="/pricing" white>
            Get started
          </Button> */}
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
}

export default Hero;
