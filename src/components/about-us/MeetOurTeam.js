import React from "react";
import styled from "styled-components";
import teamMemberData from "../../data/teamMembers";

const MeetOurTeam = () => {
    return (
        <Container>
            <div className="team_members">
                <div className="left-col col">
                    <div className="sub-section">
                        <h2 className="title">Meet Our Team</h2>
                        <p className="section-des">
                            SriMitra is all of us when we decide to take action
                            to make a difference in the lives of these precious
                            children. SriMitra is all of us when we decide to
                            provide each child a world worth living in.
                        </p>
                    </div>
                </div>

                <div className="right-col col">
                    {teamMemberData &&
                        teamMemberData.map((member, key) => (
                            <>
                                <div className="member" key={key}>
                                    <div className="member-photo-container">
                                        <img
                                            className="member-image"
                                            src={member.memberPhotoReal}
                                            alt=""
                                            srcSet=""
                                        />
                                    </div>
                                    <div className="member-name">
                                        {member.memberName}
                                    </div>
                                    <div className="member-post">
                                        {member.memberPost}
                                    </div>
                                    <div className="member-des">
                                        {member.memberStory}
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </Container>
    );
};

const Container = styled.section`
    margin-top: 75px;

    background-color: #f7f7ff;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    .team_members {
        max-width: 1440px;
        color: black;
        letter-spacing: 1px;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* width: 100%; */

        .left-col {
            position: relative;
            .sub-section {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .title {
                    color: black;
                }
            }
            .section-des {
                color: #84829e;
                line-height: 1.2;
                font-size: 0.8rem;
            }
        }

        width: 100%;

        .right-col {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            width: 100%;
            .member {
                display: flex;
                flex-direction: column;
                // gap: 0.2rem;
                width: 100%;

                .member-photo-container {
                    // border: 1px solid;
                    height: 200px;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 0.5rem;
                    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.356);
                    margin-bottom: 0.8rem;
                    .member-image {
                        width: 100%;
                        // height: 200px;
                    }
                }

                .member-name {
                    font-size: 1.2rem;
                    font-weight: 500;
                }

                .member-post {
                    color: #4339a8;
                    font-weight: 500;
                }

                .member-des {
                    margin-top: 0.6rem;
                    color: #646280;
                    line-height: 1.2;
                    font-size: 1rem;
                }
            }
        }
    }

    @media (min-width: 500px) {
        .team_members {
            .right-col {
                // border: 1px solid;
                width: 100% !important;
                display: grid;
                grid-template-columns: 1fr 1fr !important;

                .member-photo-container {
                    // border: 1px solid;
                    // height: 300px !important;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 0.5rem;
                    // box-shadow: 0 4px 15px rgba(0, 0, 0, 0.233);
                    margin-bottom: 0.8rem;
                    .member-image {
                        width: 100%;
                        height: unset !important;
                    }
                }
            }
        }

        @media (min-width: 1100px) {
            .team_members {
                flex-direction: row;

                .left-col {
                    width: 700px;

                    .sub-section {
                        position: sticky;
                        top: 2rem;
                        .section-des {
                            // width: 500px;
                        }
                    }
                }
                .right-col {
                    // border: 1px solid;
                    // width: 70% !important;
                    display: grid;
                    grid-template-columns: 1fr 1fr !important;

                    .member-photo-container {
                        // border: 1px solid;
                        // height: 300px !important;
                        width: 100%;
                        overflow: hidden;
                        border-radius: 0.5rem;
                        // box-shadow: 0 4px 15px rgba(0, 0, 0, 0.233);
                        margin-bottom: 0.8rem;
                        .member-image {
                            width: 100%;
                            height: unset !important;
                        }
                    }
                }
            }
        }
    }
`;

export default MeetOurTeam;
