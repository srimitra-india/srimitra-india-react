import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const GiveAGift = () => {
    return (
        <Container>
            <div className="content">
                <h2 className="title">GIVE A GIFT</h2>
                <div className="quote para p2">
                    “
                    <em>
                        It's not about how much we give, but how much love we
                        put into giving
                    </em>
                    ” - Mother Teresa
                </div>
                <div className="para p2">
                    Sending a SriMitra gift is much more than making a donation.
                    It's about sharing a food table with the less fortunate.
                    <br /> We bring happiness by sharing. So let's do it.
                </div>
                <div className="para p2">
                    We promise that the happiness is not limited to the donation
                    amount but the confirmation photograph and delivery note you
                    will receive on the app, will be more gratifying and
                    satisfying than even the sweetest dessert.
                </div>
                <div className=" para p2">
                    Send a SriMitra Gift and join us in giving a gift that
                    counts.
                </div>

                <Link to="/contact" className="cta">
                    Send a Gift
                </Link>
            </div>
        </Container>
    );
};

const Container = styled.section`
    background: hsla(0, 0%, 100%, 0.9);
    display: flex;
    align-items: center;
    flex-direction: column;
    color: hsl(187, 100%, 12%);
    .content {
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;

        .title {
            width: 100%;
        }

        .para {
            font-weight: 450;
            letter-spacing: 1px;
        }

        ul {
            /* border: 1px solid black; */
            display: flex;
            flex-direction: column;
            gap: 1rem;
            list-style: disc;

            li {
                margin-left: 1.2rem;
            }
        }

        .cta {
            background: hsl(187, 100%, 12%);
            color: hsl(187, 100%, 95%);
            letter-spacing: 1px;
        }

        .cta:hover {
            background: hsl(187, 100%, 95%);
            color: hsl(187, 100%, 12%);
        }
    }
`;

export default GiveAGift;
