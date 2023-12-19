"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Nextjs</li>
        <li>Solidity</li>
        <li>Hardhat</li>
        <li>Ether</li>
        <li>TailwindCSS</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Schooling at Nirmala Convent High School</li>
        <li>Btech at VIT Chennai (Computer Science)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>API developer at ZippMat</li>
        <li>React developer at BuyFi</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTabData = TAB_DATA.find((t) => t.id === tab);

  const tabButtons = TAB_DATA.map(({ id, title }) => (
    <TabButton
      key={id}
      selectTab={() => handleTabChange(id)}
      active={tab === id}
    >
      {title}
    </TabButton>
  ));

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/About.png" alt="About Me Image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web and Blockchain developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Solidity , HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {tabButtons}
          </div>
          <div className="mt-8">
            {selectedTabData.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
