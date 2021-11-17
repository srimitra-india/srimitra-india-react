import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import Faq from "./misc-components/Faq";
import Blog from "./resources/Blog";

const Recources = () => {
    return (
        <Container>
            <Route exact path="/recources/blog">
                <Blog />
            </Route>
            <Route path="/recources/faq">
                <section>
                    <Faq />
                </section>
            </Route>
            <Route path="/recources/tax-benefits">
                <section>tax</section>
            </Route>
        </Container>
    );
};

const Container = styled.div`
    /* color: white; */

    background-color: white;
    display: flex;
    justify-content: center;
    background-image: url("../../images/Logo_butterfly_only_dark.png");
    background-repeat: repeat;
    background-size: 150px;
    width: 100%;

    section {
        background: black;
    }
`;

export default Recources;
