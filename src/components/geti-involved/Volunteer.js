import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Volunteer = () => {
    return (
        <Container>
            <div className="content">
                <h2 className="title">Volunteer</h2>
                <div className="quote para p2">
                    “
                    <em>
                        Too often we underestimate the power of a touch, a
                        smile, a kind word, a listening ear, an honest
                        compliment, or the smallest act of caring, all of which
                        have the potential to turn a life around.
                    </em>
                    ” – Leo Buscaglia
                </div>
                <div className="para p2">
                    At SriMitra we firmly believe that it is all our combined
                    efforts that’ll help change this world, one orphan at a
                    time. We always welcome kind hearted volunteers with a wish
                    to serve and help better the world.
                </div>
                <div className="para p2">
                    A volunteer can be anyone. Because anyone can help and
                    serve. You don’t need to have a degree or special skill to
                    serve. What matters is a heart full of love and a soul
                    enriched and dedicated to helping others. Come join us in
                    this journey. Together, let’s build a better, brighter
                    future.
                </div>
                <h3 className="title">You can volunteer in different ways:</h3>
                <ul>
                    <li className="para p2">
                        Offering services(Teaching subjects, Awareness about
                        sanitation, Accounting of orphanage books, Tax auditing
                        …)
                    </li>
                    <li className="para p2">
                        Visit one of our partner orphanage near you to spend a
                        day with these little angels
                    </li>
                    <li className="para p2">
                        Organize camps (Awareness, Collection camps etc.)
                    </li>
                </ul>

                <Link to="/contact" className="cta">
                    CLICK HERE TO VOLUNTEER
                </Link>
            </div>
        </Container>
    );
};

const Container = styled.section`
    margin-top: 70px;

    background: hsla(0, 0%, 100%, 0.9);
    /* background: white; */
    margin-top: 70px;
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

export default Volunteer;
