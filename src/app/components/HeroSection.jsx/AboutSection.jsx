"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc">
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>abc</li>
        <li>abc</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>abc</li>
        <li>abc</li>
        <li>abc</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className=" text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/pixelcomputer.png"
          width={500}
          height={500}
          alt="Pixel Computer"
          fallback="/images/pixelcomputer.png" // Provide the path to your fallback image
        />{" "}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a full-stack developer passionate about coding and music. I
            specialize in web development, with expertise in React, JavaScript,
            HTML, CSS, PostgreSQL, Express, and MySQL for both front-end and
            back-end development. I'm also an enthusiastic music producer. My
            goal is to merge technology and music to create innovative solutions
            in the music industry. I'm a quick learner, eager to adapt to the
            evolving tech landscape, and I enjoy collaborating on projects to
            make a meaningful impact. Let's turn creative visions into digital
            realities together.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
