import React from "react";

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  const cardStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
  };

  return (
    <div className="relative group">
      <div className="h-52 md:h-72 rounded-t-xl" style={cardStyle}></div>
      <div className="text-white rounded-b-xl bg-[#18181818] py-6 px-4 relative">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="flex justify-between">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on GitHub
          </a>
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
