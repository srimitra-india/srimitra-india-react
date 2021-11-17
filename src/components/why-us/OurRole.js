import styled from "styled-components";
import React from "react";

const OurRole = () => {
    return (
        <Container>
            <div className="content">
                <h2 className="title">OUR ROLE</h2>
                <div className="para p2">
                    Each one of us today feels sympathetic to the cause of the
                    orphans and feels responsible for those who are less
                    fortunate than us. However, one of the biggest roadblocks
                    while donating money to orphanages is the lack of clear
                    information and updates about how the money donated is being
                    used.
                </div>
                <div className="para p2">
                    SriMitra found out that the lack of an efficient structure
                    for secure delivery of donations and accountability of the
                    usage of funds was costing these orphanages heavily, leaving
                    them with scarce resources. All of this puts the precious
                    smiles of these innocent young kids in danger.
                </div>
                <div className="para p2">
                    Simultaneously, SriMitra also recognized the greatest issue
                    that local grocery stores were dealing with - difficulty
                    with digitalization. Most of these stores still rely on word
                    of mouth marketing and lose out on a lot of purchases due to
                    out-of-date marketing techniques. This leaves them with
                    significantly lower sales, losing out on a large part of
                    their market and bearing losses.
                </div>
                <h3 className="title">SriMitra’s approach on the issue</h3>
                <div className="para p2">
                    SriMitra designed an app to solve both these issues via a
                    common solution. We created a simple platform that allows
                    you to place donation orders for orphanages near you with a
                    single click of your mouse. Donating money brings in a lot
                    of issues. Hence, we at SriMitra believe in Intelligent
                    donations - instead of money, donate food ingredients from
                    your local grocery stores. This helps us solve the issue of
                    food inadequacy to orphanages and at the same time helps
                    provide local grocery stores a digital means to promote
                    their products.
                </div>
                <div className="para p2">
                    Our user-friendly mobile app providing special features like
                    real-time live tracking of your donation package and photo
                    confirmation on delivery aims to remove all suspicions about
                    how your donation is being used. Using SriMitra’s completely
                    cashless fully transparent transactions makes your donation
                    experience hassle-free allowing you to focus only on
                    protecting these kids from starving,helping them be in best
                    of their mental and physical health.
                </div>
                <div className="para p2">
                    While this whole delivery is happening, we are trying to
                    promote our local grocery shops to participate in this noble
                    activity. Our solution for helping local grocery stores grow
                    and outreach is based on a model that places importance on
                    going to the very grass-roots levels, and onboarding them on
                    our app, thus being part of the VOCAL for LOCAL campaign.
                </div>
                <img src="/images/faq_ques.png" alt="process"></img>
            </div>
        </Container>
    );
};

const Container = styled.section`
    background: hsla(0, 0%, 100%, 0.9);
    /* background: white; */
    margin-top: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: hsl(187, 100%, 12%);

    width: 100%;
    .content {
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .title {
            width: 100%;
        }

        .para {
            font-weight: 450;
            letter-spacing: 1px;
        }

        img {
            /* border: 1.5px solid; */
            box-shadow: 0 0px 4px hsla(187, 100%, 23%, 0.5);
            width: 100%;
            max-width: 600px;
            border-radius: 0.5rem;
        }
    }

    @media (min-width: 700px) {
        .content {
            gap: 2rem;
        }
    }
`;

export default OurRole;
