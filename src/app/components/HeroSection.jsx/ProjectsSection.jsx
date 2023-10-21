"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
  {
    id: 1,
    title: "kjhsksg kjhsks jksh ks",
    description:
      "kjsn kjsh sk skj hjsh djh jhdj  jh djh sh shj sjh shsh sjh jsh sj ",
    image: "/images/fotocarnet.jpeg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "kjhsksg kjhsks jksh ks",
    description:
      "kjsn kjsh sk skj hjsh djh jhdj  jh djh sh shj sjh shsh sjh jsh sj ",
    image: "/images/fotocarnet.jpeg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "kjhsksg kjhsks jksh ks",
    description:
      "kjsn kjsh sk skj hjsh djh jhdj  jh djh sh shj sjh shsh sjh jsh sj ",
    image: "/images/fotocarnet.jpeg",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "kjhsksg kjhsks jksh ks",
    description:
      "kjsn kjsh sk skj hjsh djh jhdj  jh djh sh shj sjh shsh sjh jsh sj ",
    image: "/images/fotocarnet.jpeg",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "kjhsksg kjhsks jksh ks",
    description:
      "kjsn kjsh sk skj hjsh djh jhdj  jh djh sh shj sjh shsh sjh jsh sj ",
    image: "/images/fotocarnet.jpeg",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "kjhsksg kjhsks jksh ks",
    description:
      "kjsn kjsh sk skj hjsh djh jhdj  jh djh sh shj sjh shsh sjh jsh sj ",
    image: "/images/fotocarnet.jpeg",
    tag: ["All", "Web"],
  },
  {
    id: 7,
    title: "kjhsksg kjhsks jksh ks",
    description:
      "kjsn kjsh sk skj hjsh djh jhdj  jh djh sh shj sjh shsh sjh jsh sj ",
    image: "/images/fotocarnet.jpeg",
    tag: ["All", "Web", "Mobile"],
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
