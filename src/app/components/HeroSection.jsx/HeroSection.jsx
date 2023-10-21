"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Carlos Salame.",
                1000,
                "A Full Stack Developer.",
                1000,
                "A Web Developer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            I'm a Full Stack Developer with a strong passion for computer
            science and web development. I'm always excited to learn and improve
            my coding skills.
          </p>
          <div>
            <button >
            <a
              href="#contact"
              title="Contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black"
            >
              Hire Me
            </a>
            </button>
            <a
              href="#contact"
              title="Contact"
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] h-[400px] relative">
            <Image
              src="/images/fotocarnet.jpeg"
              alt="foto carnet"
              className="rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
