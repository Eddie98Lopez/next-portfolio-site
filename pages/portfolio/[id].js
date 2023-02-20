import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getProjectById } from "../../utils/getProjects";
import { useRouter } from "next/router";
import PhotoGallery from "../../components/ProjectDetails/PhotoGallery";
import ProjectProvider from "../../components/ProjectDetails/ProjectProvider";
import { Details } from "../../components/ProjectDetails/Details";
import ImageModal from "../../components/ImageModal/ImageModal";
import MetaTags from "../../components/MetaTags";

const Wrapper = styled.section`
  box-sizing: border-box;
  width: 95%;
  margin: auto;
  display: grid;
  height: 100%;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: auto;
  gap: 2.5%;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const ProjectDetail = (props) => {
  const id = useRouter().query.id;
  const [project, setProject] = useState({});

  useEffect(() => {
    getProjectById(id, setProject);
  }, [id]);

  return (
    <>
      {project.images && (
        <>
          <MetaTags
            title={`${project.title} Portfolio Project`}
            img={project.images[0].href}
            url={`https://www.lopezed.com/portfolio/${project.id}`}
            description={project.description}
          />
          <ProjectProvider value={project}>
            <ImageModal array={project.images} display={true} />
            <Wrapper>
              <PhotoGallery images={project.images} />
              <Details />
            </Wrapper>
          </ProjectProvider>
        </>
      )}
    </>
  );
};

export default ProjectDetail;
