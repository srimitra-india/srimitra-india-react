import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    // Navbar
    // console.log("helllo");
    // const navlink = document.querySelector("#navLink");
    // const navicon = document.querySelector("#navIcon");
    // const navbar = document.querySelector("#navbar");

    const [showMenu, setShowmenu] = useState(false);
    const [showSublinks, setShowSublinks] = useState(false);

    let menu;

    const desktopMenu = (
        <ul className="desktop-menu nav-link nav-open" id="navLink">
            <li className="link-grp">
                <Link to="/" className="links-grp-heading">
                    Home
                </Link>
            </li>

            <li className="link-grp">
                <div href="#" className="links-grp-heading">
                    About Us
                    <img src="/images/drop-down.svg" alt="" />
                </div>
                <div className="sub-section">
                    <ul>
                        <li>
                            <Link to="/about-us/vision-mission">
                                Vision Mission
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us/knowing-srimitra">
                                Knowing SriMitra
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us/our-team">Meet Our Team</Link>
                        </li>
                    </ul>
                </div>
            </li>

            <li className="link-grp">
                <div href="#" className="links-grp-heading">
                    Why Us
                    <img src="/images/drop-down.svg" alt="" />
                </div>
                <div className="sub-section">
                    <ul>
                        <li>
                            <Link to="/why-us/our-role">Our Role</Link>
                        </li>
                        <li>
                            <Link to="/why-us/our-reach">Our Reach</Link>
                        </li>
                        <li>
                            <Link to="/why-us/our-impact">Our Impact</Link>
                        </li>
                    </ul>
                </div>
            </li>

            <li className="link-grp">
                <div href="#" className="links-grp-heading">
                    Get Involved
                    <img src="/images/drop-down.svg" alt="" />
                </div>
                <div className="sub-section">
                    <ul>
                        <li>
                            <Link to="/get-inlvolved/careers">Careers</Link>
                        </li>
                        <li>
                            <Link to="/get-inlvolved/volunteer-with-an-orphanage">
                                Volunteer
                            </Link>
                        </li>
                        <li className="sub-links-grp">
                            <div className="sub-links-grp-heading">
                                Partner With Us
                                <img src="/images/drop-down.svg" alt="" />
                            </div>
                            <div className="sub-sub-links">
                                <Link to="/get-inlvolved/grocery-stores">
                                    Grocery Stores
                                </Link>
                                <Link to="/get-inlvolved/orphanages">
                                    Orphanages
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>

            <li className="link-grp">
                <div href="#" className="links-grp-heading">
                    Share Responsibility
                    <img src="/images/drop-down.svg" alt="" />
                </div>
                <div className="sub-section">
                    <ul>
                        <li>
                            <Link to="/share-responsibility/care-karo-share-karo">
                                Care Karo Share Karo
                            </Link>
                        </li>
                        <li>
                            <Link to="/share-responsibility/give-a-gift">
                                Give a Gift
                            </Link>
                        </li>
                        <li>
                            <Link to="/share-responsibility/plan-an-event">
                                Plan An Event
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>

            <li className="link-grp">
                <div href="#" className="links-grp-heading">
                    Resources
                    <img src="/images/drop-down.svg" alt="" />
                </div>
                <div className="sub-section">
                    <ul>
                        <li>
                            <Link to="/recources/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/recources/faq">FAQ</Link>
                        </li>
                        <li>
                            <Link to="/recources/tax-benefits">
                                Know About Tax Benefits
                            </Link>
                        </li>
                    </ul>
                </div>
            </li>

            <Link to="/contact" className="links-grp-heading cta">
                Contact Us
            </Link>
        </ul>
    );

    if (showMenu) {
        menu = (
            <>
                <ul className="nav-link nav-open mobile" id="navLink">
                    <li className="link-grp">
                        <Link to="/" className="links-grp-heading">
                            Home
                        </Link>
                    </li>

                    <li className="link-grp">
                        <div href="#" className="links-grp-heading">
                            About Us
                            <img src="/images/drop-down.svg" alt="" />
                        </div>
                        <div className="sub-section">
                            <ul>
                                <li>
                                    <Link to="/about-us/vision-mission">
                                        Vision Mission
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us/knowing-srimitra">
                                        Knowing SriMitra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us/our-team">
                                        Meet Our Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="link-grp">
                        <div href="#" className="links-grp-heading">
                            Why Us
                            <img src="/images/drop-down.svg" alt="" />
                        </div>
                        <div className="sub-section">
                            <ul>
                                <li>
                                    <Link to="/why-us/our-role">Our Role</Link>
                                </li>
                                <li>
                                    <Link to="/why-us/our-reach">
                                        Our Reach
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/why-us/our-impact">
                                        Our Impact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="link-grp">
                        <div href="#" className="links-grp-heading">
                            Get Involved
                            <img src="/images/drop-down.svg" alt="" />
                        </div>
                        <div className="sub-section">
                            <ul>
                                <li>
                                    <Link to="/get-inlvolved/careers">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/get-inlvolved/volunteer-with-an-orphanage">
                                        Volunteer
                                    </Link>
                                </li>
                                <li className="sub-links-grp">
                                    <div className="sub-links-grp-heading">
                                        Partner With Us
                                        <img
                                            src="/images/drop-down.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="sub-sub-links">
                                        <Link to="/get-inlvolved/grocery-stores">
                                            Grocery Stores
                                        </Link>
                                        <Link to="/get-inlvolved/orphanages">
                                            Orphanages
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="link-grp">
                        <div href="#" className="links-grp-heading">
                            Share Responsibility
                            <img src="/images/drop-down.svg" alt="" />
                        </div>
                        <div className="sub-section">
                            <ul>
                                <li>
                                    <Link to="/share-responsibility/care-karo-share-karo">
                                        Care Karo Share Karo
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/share-responsibility/give-a-gift">
                                        Give a Gift
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/share-responsibility/plan-an-event">
                                        Plan An Event
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="link-grp">
                        <div href="#" className="links-grp-heading">
                            Resources
                            <img src="/images/drop-down.svg" alt="" />
                        </div>
                        <div className="sub-section">
                            <ul>
                                <li>
                                    <Link to="/recources/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link to="/recources/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/recources/tax-benefits">
                                        Know About Tax Benefits
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <Link to="/contact" className="links-grp-heading cta">
                        Contact Us
                    </Link>
                </ul>
            </>
        );
    }

    return (
        <Container>
            <div className="navbar" id="navbar">
                <div className="nav-container">
                    <Link to="/" className="links-grp-heading">
                        <img
                            className="logo"
                            src="/images/Logo_full.png"
                            alt=""
                        />
                    </Link>
                    <div
                        className="nav-icon"
                        id="navIcon"
                        onClick={() => {
                            setShowmenu(!showMenu);
                        }}
                    >
                        <div className="line first-line"></div>
                        <div className="line second-line"></div>
                        <div className="line third-line"></div>
                    </div>
                </div>
                {menu}
                {desktopMenu}
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    .desktop-menu {
        display: none !important;
    }
    .navbar {
        top: 0;
        background: black;
        color: white !important;
        /* border: 1px solid; */

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        background-color: black;
        /* height: max-content; */

        border-bottom: 2px solid rgba(256, 256, 256, 0.2);

        .nav-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: min-content;
            img {
                height: 2rem !important;
            }

            .nav-icon {
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 0.4rem;
                transition: all 0.2s ease-in;
                .line {
                    background: white;
                    width: 25px;
                    height: 2px;
                    border-radius: 1px;
                }
            }

            .nav-icon-open {
                .first-line {
                    transform: translateY(8.5px) rotate(45deg);
                }

                .second-line {
                    transform: translateX(-20px);
                    opacity: 0;
                }

                .third-line {
                    transform: translateY(-8.5px) rotate(-45deg);
                }
                transition: all 0.2s ease-in;
            }
        }

        .nav-link {
            flex-direction: column;
            width: 100%;
            align-items: center;
            font-weight: 400;
            letter-spacing: 1px;
            font-size: 1.1rem;
            height: 0;
            overflow: hidden;
            transition: all 0.2s ease-in;
            gap: 0.4rem;
            display: none;
            font-size: 0.8rem;
            transition: all 0.2s ease-in;

            .link-grp {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.4rem;
                width: 100%;
                cursor: pointer;

                .links-grp-heading {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }

                .sub-section {
                    width: 100%;
                    max-width: 500px;
                    ul {
                        /* border: 2px solid; */
                        background: rgb(40, 40, 40);
                        border-radius: 0.4rem;
                        padding: 0.5rem;
                        width: 100%;
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 0.4rem;
                        li {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            a {
                                font-size: 0.8rem !important;
                            }
                            width: 100%;
                        }

                        .sub-links-grp {
                            display: flex;
                            flex-direction: column;
                            gap: 0.6rem;
                            .sub-links-grp-heading {
                                cursor: pointer;
                                display: flex;
                                align-items: center;
                                gap: 0.4rem;

                                img {
                                    transition: all 150ms ease-in-out;
                                }
                            }

                            .sub-sub-links {
                                background: rgb(78, 78, 78);
                                padding: 0.6rem;
                                display: flex;
                                gap: 0.5rem;
                                flex-direction: column;
                                align-items: center;
                                width: 100%;
                                /* height: 0; */
                                overflow: hidden;
                                border-radius: 0.2rem;
                                height: max-content;
                            }
                        }
                    }
                }
                .sub-section-open {
                    ul {
                        display: block;
                    }
                }
            }

            .cta {
                margin-top: 1rem;
                display: none;
            }
        }

        .nav-open {
            display: flex;
            height: max-content;
        }
    }

    @media only screen and (min-width: 1359px) {
        & {
        }
        .desktop-menu {
            display: flex !important;

            .cta {
                margin-top: 1rem;
                display: block !important;
            }
        }

        .navbar {
            background: black;
            color: white !important;
            // width: 100vw;
            padding: 1rem !important;

            display: flex;
            flex-direction: row;
            justify-content: space-between !important;
            align-items: center;
            // gap: 2rem;

            border-bottom: none !important;

            .nav-container {
                display: flex;
                justify-content: space-between;
                width: max-content;
                .logo {
                    height: 35px;
                }
                a:hover {
                    opacity: 1;
                    transition: all 0.1s ease-in;
                }

                .nav-icon {
                    display: none;
                }
            }

            .nav-link {
                display: flex;
                flex-direction: row;
                gap: 2rem;
                align-items: center;
                font-weight: 400;
                letter-spacing: 2px;
                font-size: 1rem;
                height: max-content;
                overflow: visible;
                width: max-content;
                .cta {
                    margin: 0;
                }

                .sub-sub-links {
                    align-items: flex-start !important;
                }

                .link-grp {
                    width: max-content;
                    display: flex;
                    flex-direction: column;
                    gap: 0.2rem;

                    font-size: 1.2rem;
                    margin: 0;
                    position: relative;
                    cursor: default;

                    .links-grp-heading {
                        width: max-content;
                        cursor: pointer;
                        display: flex;
                        align-items: center;

                        img {
                            transition: all 150ms ease-in-out;
                        }
                    }

                    .sub-section {
                        width: max-content;
                        height: max-content;
                        display: none;
                        position: absolute;
                        top: 0;
                        left: 0;

                        ul {
                            padding: 1rem;
                            margin-top: 3rem;
                            list-style: none;
                            background-color: rgb(39, 39, 39);
                            // border-radius: 0.5rem;
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start !important;
                            gap: 0.5rem;

                            li {
                                width: max-content;
                                a {
                                    font-size: 1.2rem;
                                    font-weight: 500;
                                }
                            }

                            li a:hover {
                                /* color: #fca600; */
                                color: #e99a00;
                            }
                        }
                    }
                }

                .link-grp:hover {
                    img {
                        transform: rotate(180deg);
                    }
                    .sub-section {
                        display: block;
                    }
                }
            }
        }

        .mobile {
            display: none;
        }
    }
`;

export default Nav;
