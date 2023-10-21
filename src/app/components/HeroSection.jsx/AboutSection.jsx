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
    <section className=" text-white">
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
            KJADFH KDH KDHK KHSDFKDHF KDHFS KDFH KSDHF SDKHF SDKHFD KFSKDFSDKHF
            SDKFH SDKF SKFHDKHF SDKH FDHKF SKDFSKDHF DSKHF SDFHF KSF SFHS KF
            SFKHS DFKHSD FKS DFK DHSF KSHDFKSD FKS FHSKDFKSDH FKSDF DSKHF SDKFH
            SDKF SDKFH SDKFHSD KFSD FHSFSDKHF DSKFH DSKFHSDKHFSDKFH SDKFH
            SDKHFSD KFSDK FSKDF SDFK SDK FSKHF SDKFH SDHKFK SF DSHFSDKFH SDKF SD
            FHKSDF SDHKF SDFK KSJFKSHFKSFHKSFHKSNFKNSCS KHF DKHF DKF HDSFK
            HSDFKH SDKFH DFKH DFKH DSFKH DSFKH DFHK SDFKHDS FKHD FKDHF SKDFH
            SDKFH SDFKH SDKHF GHHGS KHD KSDG SD HSDHGK SDHG SDKGH SDHKG GDSGD
            KGHDSG SDKG SD SDG DGSHKK GSDGK S KGSDKHGSD HDSG KSD G KSDSGDSGD SDG
            DSG S
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
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
