import React from "react";
import {
  ProjectsBody,
  ProjectsCard,
  ProjectsContainer,
  ProjectsContainerLeft,
  ProjectsContainerRight,
  ProjectsElement,
  ProjectsGrid,
  ProjectsHeader,
  ProjectsIcon,
  ProjectsImage,
  ProjectsTitle,
} from "./ProjectsElement";
import ProjectImg from "../../assets/projects/ProjectImg.svg";
import {
  ServiceBody,
  ServiceCard,
  ServiceCardText,
  ServiceCardTitle,
  ServiceElement,
  ServiceGrid,
  ServiceHeader,
  ServiceIcon,
  ServiceText,
  ServiceTitle,
} from "../services/ServiceElement";
import { OverviewList, ProjectList } from "./List";
import {
  OurServiceTeamHeader,
  OurServiceTeamTitle,
} from "../ourservices/OurServiceElement";
function Projects() {
  return (
    <ProjectsElement>
      <ProjectsBody>
        <ProjectsGrid>
          <ProjectsContainerLeft>
            <ProjectsTitle>Projects</ProjectsTitle>
            <ProjectsHeader>
              We have done tons of
              <br /> projects in our company
            </ProjectsHeader>
          </ProjectsContainerLeft>

          <ProjectsContainerRight>
            <ProjectsImage src={ProjectImg} alt="iconimage" />
          </ProjectsContainerRight>
        </ProjectsGrid>

        <ServiceElement>
          <ServiceBody>
            <ServiceTitle>Details</ServiceTitle>
            <ServiceHeader>Project overview</ServiceHeader>
            <ServiceText>
              We have worked with 1300+ clients from 700+ projects
              <br /> delivering to 82k users . This has led to a total of 50K{" "}
              <br />
              downloads over the past 1 Year.
            </ServiceText>
            <ServiceGrid>
              {OverviewList.map((item, index) => (
                <ServiceCard key={index}>
                  <ServiceIcon>{item.icon}</ServiceIcon>
                  <ServiceCardTitle>{item.title}</ServiceCardTitle>
                  <ServiceCardText>{item.text}</ServiceCardText>
                </ServiceCard>
              ))}
            </ServiceGrid>
          </ServiceBody>
        </ServiceElement>

        <ProjectsContainer>
          <OurServiceTeamTitle>Our Projects</OurServiceTeamTitle>
          <OurServiceTeamHeader>Our Partners</OurServiceTeamHeader>

          <ProjectsCard>
            {ProjectList.map((item, index) => (
              <ProjectsIcon key={index}>{item.img}</ProjectsIcon>
            ))}
          </ProjectsCard>
        </ProjectsContainer>
      </ProjectsBody>
    </ProjectsElement>
  );
}

export default Projects;
