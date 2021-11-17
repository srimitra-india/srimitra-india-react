import styled from "styled-components";
import React from "react";
import { Route } from "react-router";
import GiveAGift from "./ShareResponsibility/GiveAGift";
import PlanAnEvent from "./ShareResponsibility/PlanAnEvent";

const ShareResp = () => {
    return (
        <Container>
            <Route path="/share-responsibility/care-karo-share-karo">
                <div className="sub">
                    <h2>Stay Tuned For Upcoming Projects</h2>
                </div>
            </Route>
            <Route path="/share-responsibility/give-a-gift">
                <GiveAGift />
            </Route>
            <Route path="/share-responsibility/plan-an-event">
                <PlanAnEvent />
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
    padding-top: 70px;
    color: #066471;

    .sub {
        padding: 5rem 1rem;
        width: 100%;
        height: 100%;
        background-color: hsla(150, 100%, 100%, 0.9);
        display: flex;
        justify-content: center;
        h2 {
            text-align: center;
        }
    }
`;

export default ShareResp;
