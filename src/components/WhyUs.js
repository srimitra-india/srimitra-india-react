import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import OurRole from "./why-us/OurRole";

const WhyUs = () => {
    return (
        <Container>
            <Route path="/why-us/our-role">
                <OurRole />
            </Route>
            <Route path="/why-us/our-reach">
                <div>reach</div>
            </Route>
            <Route path="/why-us/our-impact">
                <div>team</div>
            </Route>
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    background-image: url("../../images/Logo_butterfly_only_dark.png");
    background-repeat: repeat;
    background-size: 150px;
`;

export default WhyUs;
