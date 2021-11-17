import styled from "styled-components";
import React from "react";

const PlanAnEvent = () => {
    return (
        <Container>
            <div className="content">
                <h2 className="title">PLAN AN EVENT</h2>
                <div className="para p2">
                    Want to host a birthday party to celebrate the birth of
                    these sweet angels but don’t know how ? Want to set up a
                    health camp to help protect these precious lives but can’t
                    figure out a way? Have amazing skills to share and teach but
                    don’t know how to offer them ?
                </div>
                <div className="para p2">
                    Let us take care of the how. At SriMitra we believe that no
                    act of kindness and love ,however small, is ever wasted. We
                    all hold the potential to change someone’s life. We want to
                    help you bring smiles to the faces of these little sweet
                    children.
                </div>
                <div className=" para p2">
                    SriMitra helps you to easily help organise a myriad of such
                    beautiful events, from art workshops to cooking classes, for
                    orphanages near you by putting you in direct contact with an
                    orphanage near you. All this comes with no strings attached.
                    No extra or hidden charges. The happy bright faces of these
                    little children remain our only payment.
                </div>

                <a href="/" className="cta">
                    Plan An Event
                </a>
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
        gap: 2rem;

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

export default PlanAnEvent;
