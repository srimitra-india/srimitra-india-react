import React from "react";
import { Route } from "react-router";
import styled from "styled-components";

const WhyUs = () => {
    return (
        <Container>
            <Route path="/why-us/our-role">
                <div>role</div>
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

const Container = styled.div``;

export default WhyUs;
