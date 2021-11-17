import styled from "styled-components";
import React from "react";
import { Route } from "react-router";
import Careers from "./geti-involved/Careers";
import Volunteer from "./geti-involved/Volunteer";
import GroceryStores from "./geti-involved/GroceryStores";
import Orphanages from "./geti-involved/Orphanages";

const GetInvolved = () => {
    return (
        <Container>
            <Container>
                <Route path="/get-involved/careers">
                    <Careers />
                </Route>
                <Route path="/get-involved/volunteer">
                    <Volunteer />
                </Route>
                <Route path="/get-involved/grocery-stores">
                    <GroceryStores />
                </Route>
                <Route path="/get-involved/orphanages">
                    <Orphanages />
                </Route>
            </Container>
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
    width: 100%;
`;

export default GetInvolved;
