import React from "react";

const ProjectsGallery = ({Gallery}) => {
  return (
    <div className="projects-gallery-box">
      {Gallery?.map((elm) => (
        <div className="md:h-[51vh] h-[48vh]  max-w-[300px] m-auto">
          <img
            src={elm}
            alt=""
            className="rounded-lg w-full  object-cover h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGallery;
