import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom/dist";
import compoheaderimg from "../../images/contactus1.jpg";
import CompoHeader from "../common/CompoHeader";
import { GoCheckCircleFill } from "react-icons/go";
import "./projectdetail.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { projectDetailData, projectsData } from "./PorojectsData";

import ProjectDetailCard from "./ProjectDetailCard";
import NextPre from "./NextPre";
import ProjectsGallery from "./ProjectsGallery";
import ChangSolut from "./ChangSolut";

const ProjectDetail = () => {
  const [hovered, setHovered] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const [currentProject, setCurrentProject] = useState({
    id: Number(id),
    project: {},
    nextproject: null,
    preproject: null,
  });

  useEffect(() => {
    const index = projectsData.findIndex((elm) => elm.id === Number(id));

    const preproject = projectsData[index - 1] || null;

    const nextproject = projectsData[index + 1] || null;
    setCurrentProject({
      ...currentProject,
      project: projectsData[index],
      preproject,
      nextproject,
      id: Number(id),
    });
  }, [id]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <CompoHeader name="project-Detail" image={compoheaderimg} />

      <div className="md:px-[30px] px-[10px] py-8">
        {/* top img div */}
        <div className="w-full md:h-[90vh] h-45vh  relative md:overflow-hidden border rounded-lg ">
          <img
            src={currentProject.project.image}
            alt=""
            className="max-w-full w-full  h-full rounded-lg object-cover project-detail-top-img"
          />
          <div className="md:absolute -bottom-1 md:right-28 rounded-md  md:pl-[55px] pl-[30px]   md:pt-[35px] pt-[20px] md:pb-[45px] pb-[25px] text-white bg-green-800 w-full max-w-[340px] project-detail-top-detail">
            {projectDetailData.map((elm) => (
              <div className="md:mt-5 mt-3 text-[18px]">
                <p className="mb-[6px] text-gray-300">{elm.title}</p>
                <p>{elm.ans}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mt-14">
          <h2 className="md:text-5xl text-4xl font-semibold my-8">
            About Project
          </h2>
          <p className="opacity-[.8] mb-8 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitor dolor eu fringilla tristique. Curabitur eget velit
            facilisis, egestas diam sed, ultrices dolor. Ut quis suscipit metus,
            non aliquet neque. Quisque porta consectetur luctus. Praesent eros
            tortor, sagittis ut magna a, venenatis ultrices enim. Mauris id
            commodo nibh. Integer a rhoncus eros, ac lobortis felis. Aenean
            convallis luctus augue.
          </p>
          <p className="opacity-[.8] mb-8 text-[16px]">
            Phasellus vitae dapibus neque. Sed ac augue viverra, volutpat erat
            sed, aliquam turpis. Quisque commodo metus quis ex condimentum
            maximus. Sed eget dui pharetra, ornare ex lamcorpe, vulputate
            sapien. Maecenas quis fringilla enim. Sed sodales ultricies orci, a
            vehicula nisl tincidunt et. Vestibulum id tellus lectus. Nam arcu
            risus, luctus vitae pulvinar blandit, aliquam non lacus. Aliquam id
            turpis semper.
          </p>

          <h3 className="text-[1.3rem] font-semibold my-7 ">
            Challenges And Solutions
          </h3>
          <p className="opacity-[.8] mb-8 text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitor dolor eu fringilla tristique. Curabitur eget velit
            facilisis, egestas diam sed, ultrices dolor. Ut quis suscipit metus,
            non aliquet neque. Quisque porta consectetur luctus. Praesent eros
            tortor, sagittis ut magna a, venenatis ultrices enim. Mauris id
            commodo nibh. Integer a rhoncus eros, ac lobortis felis. Aenean
            convallis luctus augue, id placerat mi maximus vitae.
          </p>
        </div>

        <div className="md:flex justify-between gap-10">
          <ChangSolut />
          <ChangSolut />
        </div>
        <h2 className="mt-7 text-2xl mb-5 font-semibold">Project Gallery</h2>
        <ProjectsGallery Gallery={currentProject?.project?.projectGallery} />
        <NextPre
          id={id}
          currentProject={currentProject}
          projectsData={projectsData}
        />
        <h2 className="mt-14 md:text-5xl text-3xl mb-7 font-semibold">
          Related Project
        </h2>

        <div>
          <AliceCarousel
            autoPlay={true}
            autoPlayInterval={2000}
            disableButtonsControls={true}
            disableDotsControls={true}
            infinite={true}
            responsive={{
              0: { items: 1 },
              602: { items: 2 },
              1024: { items: 3 },
              1424: { items: 4 },
            }}
          >
            {[...projectsData.slice(0, 6)].map((elm) => (
              <ProjectDetailCard
                elm={elm}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
