"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Kanye Says",
    description:
      "I've created a fun project – a Random Quote Generator. It shares quotes from my favorite artists and TV characters. It's a small, enjoyable way to discover inspiring and entertaining quotes with just a click.",
    image: "images/kanye-says-image.png",
    gitUrl: "https://github.com/Salame1996/kanye-says",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://kanye-says-hazel.vercel.app/",
  },
  {
    id: 2,
    title: "CriticScale",
    description:
      "CritiScale simplifies music exploration. Connect to Spotify, discover artists and albums, and engage with a community of fellow music enthusiasts. Share reviews, rate albums, and enjoy a personalized music journey.",
    image: "/images/criticscale.png",
    gitUrl: "https://github.com/Salame1996/music-critic",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://criticscale.vercel.app/",
  },
  {
    id: 3,
    title: "Mixed by Jorge Nehme",
    description:
      "I designed and developed a web app for a client to showcase and sell their music production services. This platform ensures a swift and secure environment for clients to upload files and access Google Drive integration. The project emphasizes my proficiency in creating online marketplaces with seamless file handling capabilities.",
    image: "/images/jorgenehme.png",
    gitUrl: "https://mixedbyjorgenehme.com/",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://mixedbyjorgenehme.com/",
  },
  {
    id: 4,
    title: "Guau",
    description:
      "I developed a sleek and intuitive e-commerce website for a client specializing in dog-related merchandise. This platform allows customers to effortlessly purchase products using credit and debit cards. The project highlights my expertise in creating user-friendly interfaces and secure online transaction systems.",
    image: "/images/guau.png",
    gitUrl: "https://guau.com.ec/",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://guau.com.ec/",
  },
  {
    id: 5,
    title: "Random Quote Generator",
    description:
      "I developed a web app that displays random quotes from my favorite artists, all presented with an appealing user interface.",
    image: "/images/randomqgen.png",
    gitUrl: "https://github.com/Salame1996/Random-Quote-Generator",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 6,
    title: "ThinkfulBNB",
    description:
      "I created a web application during my coding bootcamp that allows users to make hotel reservations conveniently. This fun project was developed using HTML and CSS, providing an engaging and user-friendly interface for booking hotel accommodations",
    image: "/images/thinkfulbnb-image.png",
    gitUrl: "https://github.com/Salame1996/thinkfulbnb-",
    tag: ["All", "Web", "Mobile"],
  },
  {
    id: 7,
    title: "Local Library",
    description:
      "I tackled the Thinkful Bootcamp challenge with a JavaScript logic implementation. My task was to create a program to find books by author or name and count the ones that are reserved. This project showcased my problem-solving skills and JavaScript proficiency.",
    image: "/images/locallib.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
