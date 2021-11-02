import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <section className="footer">
                <div className="left sub-sec">
                    <img className="logo" src="/images/Logo_full.png" alt="" />
                    <Link to="/contact" className="links-grp-heading cta">
                        Contact Us
                    </Link>
                    <p className="p3">Privacy Policy | Terms and Conditions</p>
                </div>
                <div className="right sub-sec">
                    <div className="left-links-box links-box">
                        <div className="link-box">
                            <p className="link-heading">About Us</p>
                            <Link to="/about-us/vision-mission">
                                Vision Mission
                            </Link>
                            <Link to="/about-us/knowing-srimitra">
                                Knowing SriMitra
                            </Link>
                            <Link to="/about-us/our-team">Meet Our Team</Link>
                            <p className="p3">
                                Resources -
                                <Link to="/recources/blog">Blog</Link> /
                                <Link to="/recources/faq">FAQ</Link>
                            </p>
                        </div>

                        <div className="link-box">
                            <p className="link-heading">Get Involved</p>
                            <Link to="/get-inlvolved/careers">Careers</Link>
                            <Link to="/get-inlvolved/volunteer-with-an-orphanage">
                                Volunteer
                            </Link>
                            <Link to="/get-inlvolved/grocery-stores">
                                Partner With Grocery Stores
                            </Link>
                            <Link to="/get-inlvolved/orphanages">
                                Partner With Orphanages
                            </Link>
                        </div>
                    </div>
                    <div className="right-links-box links-box">
                        <div className="link-box">
                            <p className="link-heading">Why Us</p>
                            <Link to="/why-us/our-role">Our Role</Link>
                            <Link to="/why-us/our-reach">Our Reach</Link>
                            <Link to="/why-us/our-impact">Our Impact</Link>
                        </div>

                        <div className="link-box">
                            <p className="link-heading">Share Responsibility</p>
                            <Link to="/share-responsibility/care-karo-share-karo">
                                Care Karo Share Karo
                            </Link>
                            <Link to="/share-responsibility/give-a-gift">
                                Give a Gift
                            </Link>
                            <Link to="/share-responsibility/plan-an-event">
                                Plan An Event
                            </Link>
                        </div>
                    </div>
                    <p className="p3">
                        Copyright © 2020-21 SriMitra India Private Limited
                    </p>
                </div>
            </section>
        </Container>
    );
};

const Container = styled.div`
    /* background-color: black; */
    width: 100%;

    a:hover {
        opacity: 0.8;
    }

    .footer {
        background: #000000;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color: white;

        .sub-sec {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            img {
                height: 30px;
                width: 216px;
            }
        }

        .links-box {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .link-box {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .link-heading {
                font-weight: 500;
                font-size: 1.5rem !important;
                letter-spacing: 1px;
            }

            a {
                font-size: 1rem !important;
                font-weight: 400;
                letter-spacing: 1px;
            }
        }
    }

    @media only screen and (min-width: 900px) {
        .footer {
            background: #000000;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 1.5rem;
            color: white;

            .sub-sec {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 2.5rem;

                img {
                    width: 250px;
                    height: 35px;
                }
                // border: 1px solid;
                width: 100%;
            }

            .links-box {
                display: flex;
                flex-direction: row;
                // border: 1px solid;
                justify-content: flex-start;
                gap: 2rem;
            }

            .link-box {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                // border: 1px solid;
                width: 100%;

                .link-heading {
                    font-size: 1.2rem;
                    font-weight: 400;
                    // letter-spacing: 1px;
                }

                a {
                    /* font-weight: 300; */
                    font-size: 1.2rem;
                }

                a:hover {
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default Footer;
