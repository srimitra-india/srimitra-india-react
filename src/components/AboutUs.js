import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import KnowingSrimitra from "./about-us/KnowingSrimitra";
import MeetOurTeam from "./about-us/MeetOurTeam";
import VisionMission from "./about-us/VisionMission";

const AboutUs = () => {
    return (
        <Container>
            <Route path="/about-us/vision-mission">
                <VisionMission />
            </Route>
            <Route path="/about-us/knowing-srimitra">
                <KnowingSrimitra />
            </Route>
            <Route path="/about-us/our-team">
                <MeetOurTeam />
            </Route>
        </Container>
    );
};

const Container = styled.div`
    background-image: url("../../images/Logo_butterfly_only_dark.png");
    background-repeat: repeat;
    background-size: 150px;

    /* background-position: center; */

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    /* border: 1px solid red; */
`;

export default AboutUs;
