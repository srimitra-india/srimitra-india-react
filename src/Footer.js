import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Footer = () => {
    const goUp = () => {
        window.scroll({
            top: 0,
            left: 0,
        });
    };

    const text = "hello@srimitraindia.com";
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    return (
        <Container>
            <section className="footer">
                <div className="left sub-sec">
                    <img className="logo" src="/images/Logo_full.png" alt="" />
                    <div className="socials">
                        <a
                            href="https://www.facebook.com/srimitraindia"
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                alt="social"
                                src="/images/socials/socials-facebook.png"
                            />
                            <div className="link-name p2">Facebook</div>
                            <div className="arrow">&#8250;</div>
                        </a>

                        <a
                            href="https://www.instagram.com/srimitra.india/"
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                alt="social"
                                src="/images/socials/socials-instagram.png"
                            />
                            <div className="link-name p2">Instagram</div>
                            <div className="arrow">&#8250;</div>
                        </a>
                        <a
                            href="https://twitter.com/SrimitraIndia"
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                alt="social"
                                src="/images/socials/socials-twitter.png"
                            />
                            <div className="link-name p2">Twitter</div>
                            <div className="arrow">&#8250;</div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/srimitra-india-265098221/"
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                alt="social"
                                src="/images/socials/socials-linkedin.png"
                            />
                            <div className="link-name p2">Linkedin</div>
                            <div className="arrow">&#8250;</div>
                        </a>

                        <CopyToClipboard text={text} onCopy={onCopyText}>
                            <button className="link">
                                <img
                                    alt="social"
                                    src="/images/socials/socials-mail.png"
                                />
                                <div className="link-name p2">
                                    {isCopied ? "Copied!" : "Copy Email"}
                                </div>
                                <div className="arrow">&#8250;</div>
                            </button>
                        </CopyToClipboard>

                        <a
                            href="https://api.whatsapp.com/send/?phone=918235950819&text&app_absent=0"
                            className="link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                alt="social"
                                src="/images/socials/socials-whatsapp.png"
                            />
                            <div className="link-name p2">Whatsapp</div>
                            <div className="arrow">&#8250;</div>
                        </a>
                    </div>
                    {/* <Link to="/contact" className="links-grp-heading cta">
                        Contact Us
                    </Link> */}
                    <p className="p3">Privacy Policy | Terms and Conditions</p>
                </div>
                <div className="right sub-sec">
                    <div className="left-links-box links-box">
                        <div className="link-box">
                            <p className="link-heading">About Us</p>
                            <Link to="/about-us/vision-mission" onClick={goUp}>
                                Vision Mission
                            </Link>
                            <Link
                                to="/about-us/knowing-srimitra"
                                onClick={goUp}
                            >
                                Knowing SriMitra
                            </Link>
                            <Link to="/about-us/our-team" onClick={goUp}>
                                Meet Our Team
                            </Link>
                            <p className="p3">
                                Resources -
                                <Link to="/recources/blog" onClick={goUp}>
                                    Blog
                                </Link>
                                /
                                <Link to="/recources/faq" onClick={goUp}>
                                    FAQ
                                </Link>
                            </p>
                        </div>

                        <div className="link-box">
                            <p className="link-heading">Get Involved</p>
                            <Link to="/get-involved/careers" onClick={goUp}>
                                Careers
                            </Link>
                            <Link
                                to="/get-involved/volunteer-with-an-orphanage"
                                onClick={goUp}
                            >
                                Volunteer
                            </Link>
                            <Link
                                to="/get-involved/grocery-stores"
                                onClick={goUp}
                            >
                                Partner With Grocery Stores
                            </Link>
                            <Link to="/get-involved/orphanages" onClick={goUp}>
                                Partner With Orphanages
                            </Link>
                        </div>
                    </div>
                    <div className="right-links-box links-box">
                        <div className="link-box">
                            <p className="link-heading">Why Us</p>
                            <Link to="/why-us/our-role" onClick={goUp}>
                                Our Role
                            </Link>
                            <Link to="/why-us/our-reach" onClick={goUp}>
                                Our Reach
                            </Link>
                            <Link to="/why-us/our-impact" onClick={goUp}>
                                Our Impact
                            </Link>
                        </div>

                        <div className="link-box">
                            <p className="link-heading">Share Responsibility</p>
                            <Link
                                to="/share-responsibility/care-karo-share-karo"
                                onClick={goUp}
                            >
                                Care Karo Share Karo
                            </Link>
                            <Link
                                to="/share-responsibility/give-a-gift"
                                onClick={goUp}
                            >
                                Give a Gift
                            </Link>
                            <Link
                                to="/share-responsibility/plan-an-event"
                                onClick={goUp}
                            >
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

    button {
        background: none;
        border: none;
        outline: none;
        color: white;
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

        .socials {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: max-content;

            .link {
                padding-right: 0.2rem;
                /* border: 1px solid; */
                width: max-content;
                display: flex;
                gap: 0.2rem;
                align-items: center;
                cursor: pointer;

                img {
                    width: 35px;
                    height: 35px;
                }

                .link-name {
                    letter-spacing: 1px;
                }

                .arrow {
                    opacity: 0;
                    transition: all 150ms ease-in;
                }
            }

            .link:hover {
                .arrow {
                    opacity: 1;
                }
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

            .socials {
                display: flex;
                flex-direction: column;
                gap: 0.3rem !important;
                width: max-content;

                .link {
                    padding-right: 0.2rem;
                    /* border: 1px solid; */
                    width: max-content;
                    display: flex;
                    gap: 0.3rem !important;
                    align-items: center;

                    img {
                        width: 35px;
                        height: 35px;
                    }

                    .link-name {
                        letter-spacing: 1px;
                    }
                }
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
                    /* font-size: 1.2rem; */
                }

                a:hover {
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default Footer;
