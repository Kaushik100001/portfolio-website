"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crowdfunding Website ",
    description: "Announcing a Crowdfunding platform leveraging React,Solidity, and Thirdweb for maximum security, transparency, and efficiency. Creators can easily launch campaigns, while investors enjoy worldwide opportunities.",
    image: "/image/crowdfunding.png",
    tag: ["All", "Web3.0"],
    gitUrl: "https://github.com/Kaushik100001/Crowdfunding",
    previewUrl: "https://crowdfunding-bay.vercel.app/",
  },
  {
    id: 2,
    title: "NFT Minting Dapp",
    description: "Made a NFT minting website where you can mint your own Dogger NFT . For minting you need a DGT token which I made myself using ERC20",
    image: "/image/NFT.png",
    tag: ["All", "Web3.0"],
    gitUrl: "https://github.com/Kaushik100001/NFT-minting",
    previewUrl: "https://doggernft.netlify.app/",
  },
  {
    id: 3,
    title: "Token Staking Dapp",
    description: "Watch your rewards grow at an impressive rate of 1 token/sec.Inspired by Kshitij Srivastava, it's your gateway to seamlessand rewarding crypto participation.",
    image: "/image/Token.png",
    tag: ["All", "Web3.0"],
    gitUrl: "https://github.com/Kaushik100001/Token-Staking-DApp",
    previewUrl: "https://stakedfortune.netlify.app/",
  },
  {
    id: 4,
    title: "Chat App",
    description: "I made a Chat web-app Chatter. First you need to Sign-in with google then enter the common room and then you can chat with anyone around the world. I made this web app using tech stacks React and Firebase. Used React for interface and firebase for",
    image: "/image/Chat.png",
    tag: ["All", "Web2.0"],
    gitUrl: "https://github.com/Kaushik100001/Chat-app",
    previewUrl: "https://chatterit.netlify.app/",
  },
  {
    id: 5,
    title: "Netflix Clone ",
    description: "You can see the trending movies all around the globe . You can also save the movies to watch later but for that you need to sign in using Email and password. I created the Frontend using React and Backend using FireBase" ,
    image: "/image/Netflix.png",
    tag: ["All", "Web2.0"],
    gitUrl: "https://github.com/Kaushik100001/Netflix-clone",
    previewUrl: "https://cinestream.netlify.app/",
  },
//   {
//     id: 6,
//     title: "View more project in Github",
  
//     image: "" ,
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web3.0"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web2.0"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;