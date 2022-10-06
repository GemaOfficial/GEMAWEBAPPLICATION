import React from "react";
import {
  AboutBody3,
  AboutTeam,
  AboutTeamBody,
  AboutTeamGrid,
  AboutTeamHeader,
  AboutTeamIcon,
  AboutTeamImage,
  AboutTeamName,
  AboutTeamText,
  AboutTeamTitle,
} from "./AboutUsElement";
import { TeamData } from "./Team";

function Founders(props) {
  return (
    <AboutTeam>
      <AboutTeamTitle>Team</AboutTeamTitle>
      <AboutTeamHeader>Our team members</AboutTeamHeader>
      <AboutTeamText>
        Meet our Founder together with our co-founder
      </AboutTeamText>
      <AboutBody3>
        {TeamData?.map((team) => (
          <AboutTeamGrid key={team.name}>
            <AboutTeamImage>{team.image}</AboutTeamImage>
            <AboutTeamName>{team.name}</AboutTeamName>
            <AboutTeamText>{team.title}</AboutTeamText>
            <AboutTeamText>{team.description}</AboutTeamText>
            <AboutTeamBody>
              <AboutTeamIcon>{team.linkedin}</AboutTeamIcon>
              <AboutTeamIcon>{team.twitter}</AboutTeamIcon>
            </AboutTeamBody>
          </AboutTeamGrid>
        ))}
      </AboutBody3>
    </AboutTeam>
  );
}

export default Founders;
