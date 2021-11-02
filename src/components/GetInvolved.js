import styled from "styled-components";
import React from "react";
import { Route } from "react-router";
import Careers from "./geti-involved/Careers";

const GetInvolved = () => {
    return (
        <Container>
            <Container>
                <Route path="/get-involved/careers">
                    <Careers />
                </Route>
                <Route path="/get-involved/volunteer">
                    <div>volunteer</div>
                </Route>
                <Route path="/get-involved/grocery-stores">
                    <div>grocery Stores</div>
                </Route>
                <Route path="/get-involved/orphanages">
                    <div>orphanages</div>
                </Route>
            </Container>
        </Container>
    );
};

const Container = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    /* display: grid; */
    /* place-items: center; */
    width: 100%;
`;

export default GetInvolved;
