import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import Faq from "./misc-components/Faq";

const Recources = () => {
    return (
        <Container>
            <Route path="/recources/blog">
                <section>Blog</section>
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
    color: white;
`;

export default Recources;
