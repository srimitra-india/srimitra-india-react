import React from "react";
import styled from "styled-components";

const VisionMission = () => {
    return (
        <Container>
            <div class="box">
                <div className="vision_mission">
                    <h2 className="title">Our Mision</h2>
                    <div className="ans quote">
                        To facilitate the allocation of private resources of
                        money, assets, time and skills to be shared willingly,
                        and used efficiently with transparency; providing
                        developmental opportunities for every destitute children
                        in society.
                    </div>
                </div>
                <div className="vision_mission">
                    <h2 className="title">Our Vision</h2>
                    <div className="ans quote">
                        Building the future of Orphan kids to help strengthen
                        civil society by enhancing the effectiveness of
                        philanthropy.
                    </div>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    margin-top: 70px;
    background: hsl(0, 0%, 100%, 0.9);
    position: relative;
    color: black;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;

    .box {
        max-width: 1440px;
        width: 100%;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;

        .ans {
            margin-top: 1rem;
            padding: 1em;
            letter-spacing: 1px;
            font-weight: 400;
        }
    }

    .title {
        border: none;
        padding: 0;

        color: rgb(0, 100, 114);
    }

    @media (min-width: 600px) {
        .box {
            height: 50vh;
            max-width: 1440px;
            width: 100%;
            display: flex;
            gap: 1rem;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;

            .vision_mission {
                max-width: 650px;
            }

            .ans {
                height: 200px;
                border-radius: 0.2rem;
                font-size: 1.5rem;
                padding: 1em;
            }
        }
    }
`;

export default VisionMission;
