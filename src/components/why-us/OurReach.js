import styled from "styled-components";
import React from "react";

const OurReach = () => {
    return (
        <Container>
            {" "}
            <div className="content">
                <h2 className="title">OUR REACH</h2>
                <div className="para p2">
                    We believe in last mile connectivity and thus, while your
                    locality would be having an orphanage or foster care home
                    for street strand children they might still be unknown to
                    you. We want to go the extra mile and help you know about
                    them. Hence, we ensure that any orphanage/child care home
                    within 5 to 10miles radius from your residence can be traced
                    using SriMitra app.
                </div>
                <div className="para p2">
                    This also brings the opportunity for local brands and mom
                    and pop stores to connect with us for delivery of all
                    ordered goods. Our Vocal for Local model focuses on helping
                    the local economy grow and elevate while helping provide for
                    our neighbourhood orphanages and foster care homes.
                </div>
                <div className="para p2">
                    The app focuses on regional communities, organisations &
                    businesses simultaneously. Your one-click donation using our
                    app results in three-tier help : -food to your local
                    orphanage that’ll keep those precious smiles upturned,
                    -improved sales and wider customer pool for your local
                    businesses and manufacturers, -and ultimate improvement and
                    upliftment of your local community
                </div>
            </div>{" "}
        </Container>
    );
};

const Container = styled.section`
    background: hsla(0, 0%, 100%, 0.9);
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
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        .title {
            width: 100%;
        }

        .para {
            font-weight: 450;
            letter-spacing: 1px;
        }
    }
`;

export default OurReach;
