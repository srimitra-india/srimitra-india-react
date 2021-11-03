import React from "react";
import styled from "styled-components";
import teamMemberData from "../data/teamMembers";
// import testimonialsData from "../data/tesstimonials";
import Faq from "./misc-components/Faq";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <section className="landing-page">
                <div style={{ height: 70 + "px" }}></div>
                <div className="landing-text">
                    <h1>Building The Future</h1>
                    <p className="p2 cta-text">
                        We are a community dedicated to food adequacy for
                        destitute children. <br /> We make donations simpler,
                        direct and real.
                    </p>
                    <div className="cta-container">
                        <Link className="cta" to="/survey">
                            Hello There{" "}
                            <span aria-label="emoji" role="img">
                                👋🏻
                            </span>
                        </Link>
                        <Link to="/" className="cta cta-sec">
                            Explore child care centers near you
                        </Link>
                    </div>
                </div>
                <img
                    className="landing-image"
                    src="/images/landing-img.png"
                    alt=""
                />
            </section>
            <section className="vision-mission">
                <h3 className="title col">
                    Our <br /> Vision & Mission
                </h3>
                <div className="vision-mission-description col">
                    <div className="vision vmcard">
                        <div className="card-title p1">Vision</div>
                        <div className="card-text p2">
                            Building the future of Orphan kids to help
                            strengthen civil society by enhancing the
                            effectiveness of philanthropy.
                        </div>
                    </div>
                    <div className="mission vmcard">
                        <div className="card-title p1">Mission</div>
                        <div className="card-text p2">
                            To facilitate the allocation of private resources of
                            money, assets, time and skills to be shared
                            willingly, and used efficiently with transparency;
                            providing developmental opportunities for every
                            destitute children in society
                        </div>
                    </div>
                </div>
            </section>
            <section className="app-coming-soon">
                <div className="circle1 circle"></div>
                <div className="circle2 circle"></div>
                <div className="sub-section">
                    <h3 className="title app-coming-soon-title">
                        <img
                            src="/images/Logo_butterfly_only.png"
                            alt=""
                            srcSet=""
                        />
                        Mobile App Coming Soon
                    </h3>
                    <a
                        href="/"
                        className="send-to-link app-coming-soon-cta-link"
                    >
                        Download on Playstore
                    </a>
                </div>
                <img
                    className="app-coming-soon-img"
                    src="./images/app_coming_soon.png"
                    alt=""
                    srcSet=""
                />
            </section>
            {/* <section className="partners">
                <h3 className="title">Partners</h3>
                <div className="brands">
                    <div className="brand"></div>
                    <div className="brand"></div>
                    <div className="brand"></div>
                    <div className="brand"></div>
                    <div className="brand"></div>
                    <div className="brand"></div>
                    <div className="brand"></div>
                    <div className="brand"></div>
                </div>
            </section> */}
            <section className="team-members">
                <div className="bkg">
                    <h3 className="title">Our Team</h3>
                    <div className="slider">
                        <div className="members">
                            {teamMemberData &&
                                teamMemberData.map((member, key) => (
                                    <>
                                        <div className="member" key={key}>
                                            <div className="member-detail">
                                                <img
                                                    className="member-photo"
                                                    src={member.memberPhoto}
                                                    alt=""
                                                    srcSet=""
                                                />
                                                <div className="name-post">
                                                    <p className="p1 member-name">
                                                        {member.memberName}
                                                    </p>
                                                    <p className="p2 member-post">
                                                        {member.memberPost}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="p3 member-description">
                                                {member.memberDescription}
                                            </p>
                                        </div>
                                    </>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="testimonials-section">
                <div className="title-section">
                    <h3 className="title">Testimonials</h3>
                    <div className="p2">What our clients has to say.</div>
                </div>
                <div className="slider">
                    <div className="testimonials">
                        {testimonialsData &&
                            testimonialsData.map((testimonial, key) => (
                                <>
                                    <div className="testimonial" key={key}>
                                        <div className="top-banner">
                                            <img
                                                src={
                                                    testimonial.testimonialPhoto
                                                }
                                                alt=""
                                                srcSet=""
                                            />
                                        </div>
                                        <div className="bottom">
                                            <p className="p3 testimonial-msg">
                                                {testimonial.testimonialMsg}
                                            </p>
                                            <p className="p1 testimonial-name">
                                                {testimonial.testimonialName}
                                            </p>
                                            <p className="p2 testimonial-company">
                                                {
                                                    testimonial.testimonialCompanyName
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        <div className="testimonial null-div"></div>
                    </div>
                </div>
            </section> */}
            <Faq />
        </Container>
    );
};

const Container = styled.div`
    .send-to-link {
        display: none;
        cursor: pointer;
        // display: none;
        text-align: left;
        border: 3px solid;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-weight: 500;
        font-size: 1.2rem;
        width: max-content;
    }

    .landing-page {
        overflow: hidden;
        padding: 0;
        height: 95vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        background: black;
        color: white;

        .landing-text {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1rem;
            line-height: 1;

            .cta-container {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                .cta-sec {
                    display: none;
                }
            }
        }

        h1 {
            color: #ffa800;
        }
    }

    .vision-mission {
        background: linear-gradient(-135deg, #bd99ff, #9f6bff);
        padding: 0;
        display: flex;
        flex-direction: column;

        .title {
            display: flex;
            align-items: center;
            padding: 2rem;
            background-image: url("../../images/vision_image.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .vision-mission-description {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .vmcard {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding: 15px;
                gap: 10px;

                background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.411) 0%,
                    rgba(0, 0, 0, 0.699) 100%
                );
                box-sizing: border-box;
                box-shadow: 0px 19px 50px rgba(0, 0, 0, 0.17);
                border-radius: 10px;

                color: rgb(255, 255, 255);
            }
        }
    }

    .app-coming-soon {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        position: relative;
        height: 214px;
        overflow: hidden;
        background: #2193b0;
        background: linear-gradient(to right, #2193b0, #6dd5ed);

        .sub-section {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .title {
            img {
                display: none;
            }
            text-align: center;
            color: white;

            .end-to-link {
                display: none !important;
            }
        }
        img {
            width: 200px;
        }

        .circle {
            position: absolute;
        }
        .circle2 {
            width: 245.31px;
            height: 271.69px;
            left: 50%;
            top: -90%;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.08);
        }

        .circle1 {
            width: 238.81px;
            height: 212.23px;
            border-radius: 50%;
            left: -20%;
            top: 50%;

            background: rgba(0, 0, 0, 0.08);
        }
    }

    .partners {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: white;
        color: black;

        .brands {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;

            .brand {
                width: 46px;
                height: 30px;
                background: rgba(0, 0, 0, 0.253);
                border-radius: 5px;
            }
        }
    }

    .team-members {
        overflow: hidden;
        // overflow-x: auto;
        padding: 0;
        background: linear-gradient(200.15deg, #4d8cda 0%, #34393a 100%);
        height: max-content;

        .bkg {
            padding: 2rem 0;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 100%;
            height: 100%;
            background-image: url("../../images/teams-member-bkg.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            .send-to-link {
                margin-left: 2rem;
                color: white;
            }
        }

        .title {
            padding: 0 2rem;
            color: #ffffff;
        }

        .slider {
            height: 100%;
            overflow-x: scroll;
            -ms-overflow-style: none;
            padding: 0 2rem;
            // scrollbar-width: none;
            // width: max-content;
        }
        .slider::-webkit-scrollbar {
            // width: 0;
            // height: 0px;
            // background: black;
        }

        .members {
            // border: 2px solid rgb(255, 255, 255);
            background: none;
            gap: 2rem;
            width: 100%;
            align-items: stretch;
            display: flex;
            scroll-snap-type: y none;
            scroll-snap-type: x mandatory;
            margin-right: 4rem;

            .member {
                scroll-snap-align: center;
                flex: none;
                // margin-right: 2rem;
                width: 100%;
                background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.329) 0%,
                    rgba(0, 0, 0, 0.397) 100%
                );
                // box-shadow: 0px 2.5411px 58.4452px rgba(0, 0, 0, 0.25);
                backdrop-filter: blur(22.2346px);
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                padding: 2rem;
                gap: 0.8rem;

                color: white;

                .member-detail {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    width: 100%;
                    // border: 1px solid;
                    gap: 1.5rem;

                    .member-photo {
                        border-radius: 50%;
                        width: 80px;
                        box-shadow: 0px 0px 40.2349px rgba(0, 0, 0, 0.63);
                    }

                    .name-post {
                        width: max-content;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        // border: 1px solid;
                        gap: 1.5rem;
                        .member-name {
                            font-size: 1.4rem;
                            line-height: 1.4rem;
                            text-align: center;
                        }

                        .member-post {
                            font-size: 1rem;
                            line-height: 1.5rem;
                        }
                    }
                }

                .member-description {
                    // width: 95%;
                    font-size: 1rem;
                    line-height: 1.5rem;
                    text-align: center;
                    letter-spacing: 1px;
                    // text-align: left;
                }
            }

            .null-div {
                width: 1px;
                height: 1px;
                padding: 0;
                opacity: 0;
            }
        }

        .send-to-link {
            display: block;
            color: #002a31;
            margin-left: 2rem;
            font-size: 0.8rem;
            border: 2px solid;
        }
    }

    .testimonials-section {
        background: linear-gradient(124.22deg, #ffffff -0.85%, #1cc6e2 99.2%);
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-right: 0;
        padding-left: 0;
        width: 100%;
        overflow-x: hidden;

        .title-section {
            padding-left: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .title {
            color: #002a31;
        }

        .slider {
            width: 100%;
            overflow-x: scroll;
        }

        .testimonials {
            width: 100%;
            padding: 0 2rem;
            height: max-content;
            gap: 2rem;
            display: flex;
            justify-content: flex-start;

            .testimonial {
                flex: none;
                border-radius: 5px;
                width: 100%;
                background: #ffffff;
                display: flex;
                flex-direction: column;

                .top-banner {
                    border-radius: 5px;
                    background: linear-gradient(
                        180deg,
                        #fa772b 0%,
                        #ff996a 100%
                    );
                    width: 100%;
                    height: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        border-radius: 50%;
                        width: 100px;
                    }
                }

                .bottom {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    padding: 1.5rem;
                    color: black;
                    gap: 1rem;

                    .testimonial-msg {
                        font-size: 1rem;
                        font-weight: 500;
                        line-height: 1.2rem;
                    }

                    .testimonial-name {
                        font-weight: 500;
                        letter-spacing: 1px;
                    }

                    .testimonial-company {
                        font-weight: 500;
                        letter-spacing: 1px;
                        font-size: 0.8rem;
                    }
                }
            }

            .null-div {
                width: 1px;
                padding: 0;
                opacity: 0;
            }
        }

        .send-to-link {
            display: block;
            color: #002a31;
            margin-left: 2rem;
            font-size: 0.8rem;
            border: 2px solid;
        }
    }
    .title {
        border: none;
    }

    @media only screen and (min-width: 500px) {
        .team-members {
            overflow: hidden;
            padding: 0;
            background: linear-gradient(200.15deg, #4d8cda 0%, #34393a 100%);
            border: 1px solid green;
            height: max-content;

            .bkg {
                padding: 6rem 0;
                gap: 2rem;
            }

            .title {
                padding: 0 6rem;
            }

            .members {
                padding: 0 4rem;
                gap: 2rem;
                height: max-content;
                margin-bottom: 2rem;

                .member {
                    width: max-content;
                    background: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.473) 0%,
                        rgba(0, 0, 0, 0.397) 100%
                    );
                    border-radius: 10px;
                    padding: 1.8rem;
                    gap: 1rem;
                    height: max-content;

                    .member-detail {
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                        justify-content: center;
                        width: 100%;
                        // border: 1px solid;
                        gap: 1rem;

                        .member-photo {
                            border-radius: 50%;
                            width: 80px;
                            box-shadow: 0px 0px 40.2349px rgba(0, 0, 0, 0.63);
                        }

                        .name-post {
                            width: max-content;
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            // border: 1px solid;
                            gap: 0.5rem;
                            .member-name {
                                font-size: 1.4rem;
                                line-height: 1.4rem;
                                text-align: center;
                            }

                            .member-post {
                                font-size: 1rem;
                                line-height: 1.5rem;
                            }
                        }
                    }

                    .member-description {
                        max-width: 300px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 15; /* number of lines to show */
                        -webkit-box-orient: vertical;
                    }
                }

                .null-div {
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    opacity: 0;
                }
            }

            .send-to-link {
                color: rgb(253, 253, 253);
                margin-left: 6rem !important;
                display: none;
            }
        }

        .testimonials-section {
            background: linear-gradient(
                124.22deg,
                #ffffff -0.85%,
                #1cc6e2 99.2%
            );
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-right: 0;
            padding-left: 0;

            .title-section {
                padding-left: 6rem;
            }

            .title {
                color: #002a31;
            }

            .testimonials {
                padding: 0 6rem;
                gap: 2rem;
                display: flex;
                margin-bottom: 2rem;

                .testimonial {
                    border-radius: 10px;
                    width: 300px;
                    overflow: hidden;

                    .top-banner {
                        border-radius: 10px;
                        height: 200px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            border-radius: 50%;
                            width: 100px;
                        }
                    }

                    .bottom {
                        display: flex;
                        justify-content: space-between;
                        padding: 1rem;
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 1rem;
                    }
                }

                .null-div {
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    opacity: 0;
                }
            }

            .send-to-link {
                display: none;
            }
        }
    }

    @media only screen and (min-width: 800px) {
        .landing-page {
            height: 100vh;
            align-items: center;
            padding: 0 !important;
            gap: 0;
            .landing-text {
                margin-top: 0 !important;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center !important;
                gap: 1rem;
                width: 800px;
                text-align: center;
                line-height: 1;

                .cta-text {
                    font-size: 1.2rem;
                    max-width: 575px !important;
                    line-height: 1.2;
                }

                .cta-container {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;

                    .cta {
                        font-size: 1rem;
                    }
                    .cta-sec {
                        display: block;
                    }
                }
            }

            .landing-image {
                min-width: 1400px;
                width: 100% !important;
            }
        }
    }

    @media only screen and (min-width: 1000px) {
        .send-to-link {
            display: block;
            // margin-left: 2rem;
        }

        .title {
            justify-content: center;
            font-size: 70px;
            display: flex;
            flex-direction: column;
            align-items: flex-start !important;
            gap: 2rem;
        }

        .landing-page {
            height: 100vh;
            .landing-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 1rem;

                .cta-text {
                    max-width: 350px;
                }

                .cta-container {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    .cta-sec {
                        display: block;
                    }
                }
            }
        }

        .vision-mission {
            background: linear-gradient(-135deg, #bd99ff, #9f6bff);
            padding: 0;

            flex-direction: row !important;
            justify-content: space-between;

            .title {
                height: 600px;
                padding: 10rem;
                .send-to-link:hover {
                    background: #ab7efc;
                }
            }

            .col {
                width: 50%;
            }

            .vision-mission-description {
                padding: 2rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                // width: 60%;

                .vmcard {
                    max-height: 100%;
                    max-width: 750px;
                    align-items: flex-start;
                    padding: 20px;
                    gap: 20px;
                }
            }
        }

        .app-coming-soon {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: rem;
            position: relative;
            height: max-content;

            .sub-section {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }

            .title {
                width: 500px;
                border-radius: 0.2rem;
                text-align: left;
                line-height: 1;
                position: relative;

                img {
                    position: absolute;
                    top: -50px;
                    left: -50px;
                    display: block;
                    width: 50px;
                }
            }

            .send-to-link {
                // transform: scale(0);
            }

            .send-to-link:hover {
                background: #43b1cb;
            }

            img {
                width: 40%;
            }

            .circle {
                position: absolute;
            }
            .circle2 {
                z-index: -1;
                width: 1246px;
                height: 1380px;

                left: 50%;
                top: -90%;
                border-radius: 50%;
                background: rgba(0, 0, 0, 0.08);
            }

            .circle1 {
                z-index: -1;
                width: 1213px;
                height: 1078px;
                border-radius: 50%;
                left: -20%;
                top: 50%;

                background: rgba(204, 8, 8, 0.08);
            }
        }

        .partners {
            padding: 6rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            background: white;

            .brands {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                flex-wrap: wrap;
                gap: 2rem;

                .brand {
                    width: 300px;
                    height: 139.36px;
                    background: rgba(0, 0, 0, 0.253);
                    border-radius: 5px;
                }
            }
        }

        @keyframes slideLeft {
            0% {
                transform: translateX(1600px);
                color: #133d47;
                padding: 1rem;
                background-color: white;
            }
            99% {
                transform: translateX(0);
                color: #133d47;
                padding: 1rem;
                background-color: white;
            }
            100% {
                color: white;
                padding: 0;
                background-color: transparent;
            }
        }

        @keyframes fadein {
            0% {
                transform: scale(0);
            }
            50% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
    }
`;

export default Home;
