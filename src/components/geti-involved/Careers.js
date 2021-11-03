import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Careers = () => {
    return (
        <Container className="jobsss">
            <div className="container">
                <div className="header">
                    <h3 className="heading title">Srimitra Career</h3>
                    <div className="p2 para">
                        Come Work With Us and Make A Change.
                    </div>
                </div>
                <div className="jobs_panel">
                    <div className="topic">Jobs at Srimitra</div>
                    <div className="p1" style={{ marginTop: 2 + "rem" }}>
                        Sorry, There are no jobs at the moment.
                    </div>
                    <div className="p1">
                        For Further details{" "}
                        <Link to="/contact" className="p1">
                            Contact Us
                        </Link>
                    </div>
                    {/* <div className="jobs">
                        <div className="job">
                            <div className="job_title">UX Writer</div>
                            <div className="job_des">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Quia nulla voluptatibus
                                aspernatur autem architecto deleniti. Lorem
                                ipsum dolor, sit amet consectetur adipisicing
                                elit. Inventore sit est error quam eos veritatis
                                laudantium non, ipsam nulla repellendus
                                architecto qui dolor minus delectus.
                            </div>
                            <div className="job_options">
                                <div className="jobs_details">
                                    <div className="job_type">Fulltime</div>•
                                    <div className="job_timing">Remote</div>•
                                    <div className="job-pay">30-50k</div>
                                </div>
                                <a href="/" className="cta">
                                    Apply For This Job
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Container>
    );
};

const Container = styled.section`
    margin-top: 70px;
    color: hsl(187, 100%, 18%);
    max-width: 1440px;
    width: 100%;

    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .header {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .jobs_panel {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .topic {
                font-size: 1.3rem;
                font-weight: 600;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid;
            }

            a {
                text-decoration: underline;
            }

            .jobs {
                display: flex;
                flex-direction: column;
                /* gap: 1rem; */

                .job {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    border-bottom: 1px solid;
                    padding: 1rem 0;

                    .job_title {
                        font-size: 1.2rem;
                        font-weight: 500;
                    }

                    .job_des {
                    }

                    .job_options {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }
                    .jobs_details {
                        display: flex;
                        gap: 0.4rem;
                    }

                    .cta {
                        color: hsl(187, 100%, 18%);
                        border-color: hsl(187, 100%, 18%);
                    }
                    .cta:hover {
                        color: white;
                        background: hsl(187, 100%, 18%);
                    }
                }
            }
        }
    }

    @media (min-width: 600px) {
        .container {
            flex-direction: row;
            gap: 2rem !important;
            .header {
                gap: 2rem !important;
                flex: 0.4;
            }

            .jobs_panel {
                flex: 0.7;
            }

            .topic {
                margin-top: 15px;
                font-size: 2rem !important;
                padding-bottom: 1.75rem !important;
                border-bottom: 3px solid !important;
            }

            .job {
                background: hsla(187, 100%, 18%, 0);
                transition: all 150ms ease;
                gap: 1rem !important;
                border-bottom: 1px solid;
                padding: 2rem !important;

                .job_title {
                    font-size: 1.5rem !important;
                    font-weight: 500;
                }

                .job_des {
                    /* border: 1px solid; */
                    max-width: 600px !important;
                    font-size: 1.2rem;
                }

                .job_options {
                    display: flex;
                    flex-direction: row !important;
                    justify-content: space-between;
                    align-items: center !important;
                }
                .jobs_details {
                    display: flex;
                    gap: 0.4rem;
                    font-weight: 500;
                }

                .cta {
                    font-size: 1rem !important;
                    color: hsl(187, 100%, 18%);
                    border-color: hsl(187, 100%, 18%);
                }
                .cta:hover {
                    color: white;
                    background: hsl(187, 100%, 18%);
                }
            }

            .job:hover {
                background: hsla(187, 100%, 18%, 0.1);
            }
        }
    }
`;

export default Careers;
