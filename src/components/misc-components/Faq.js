import React from "react";
import styled from "styled-components";
import faqQues from "../../data/questions";
import Accordian from "./Accordian";

const Faq = () => {
    return (
        <Container className="faq">
            <div className="title-section">
                <h3 className="title">
                    Have A Question?? <br /> Look Here..
                </h3>
            </div>
            <div className="faq-container">
                {faqQues.map((ques, key) => (
                    <div className="div" key={key} style={{ width: 100 + "%" }}>
                        <Accordian className="accordian" ques={ques} />
                        <div className="line"></div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

const Container = styled.section`
    /* background: linear-gradient(200.15deg, #191e4d 0%, #20233d 100%); */
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: flex-start;
    padding: 4rem 0;

    .title-section {
        padding: 0 1.5rem;
    }

    .faq-container {
        height: max-content;
        /* border: 1px solid; */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.6rem;
        padding: 1rem;
    }

    .accordian {
        padding: 0.5rem;
        cursor: pointer;
        width: 100%;
        height: max-content;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .img-ans {
        width: 90%;
    }

    .question {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .answer-container {
        width: 100%;
        /* border: 1px solid white; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        height: 0;
        overflow-y: hidden;
        margin-top: -10px;

        .answer {
            width: 100%;
            height: max-content;
        }
    }
    img {
        width: 15px;
        transition: transform 0.2s ease-out;
        border-radius: 0.2rem;
    }

    .accordian_open {
        .question {
            font-weight: 600;
            letter-spacing: 1px;
        }
    }

    .line {
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.247);
    }

    .accordian_open img {
        transform: rotate(45deg);
        transition: transform 0.2s ease-in;
    }

    .answer {
        letter-spacing: 1px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.568);
        height: max-content;
        /* padding-top: 10px; */
    }

    .ans_open {
        padding-top: 0.5rem;
        height: max-content;
    }

    button {
        border: none;
        background: black;
        padding: 1rem 2rem;
        color: blanchedalmond;
        border-radius: 0.2rem;
        margin-top: 1rem;
    }

    .accordian-open {
        /* margin: 1rem 0; */
        background: rgba(255, 255, 255, 0.147);
        .toggle {
            transform: rotate(45deg);
        }
        .answer-container {
            height: max-content;
            margin-top: 0 !important;
        }
    }

    @media only screen and (min-width: 1000px) {
        & {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6rem;
            text-align: center;

            .faq-container {
                height: max-content;
                /* border: 1px solid; */
                width: 60%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 0.5rem;
            }

            .accordian {
                border: 1px solid white;
                border: 2px solid transparent;
                border-radius: 0.4rem;
                padding: 0.7rem 1rem;
                transition: all 150ms ease-in;
                margin: 0;
            }

            .accordian:hover {
                margin: 1rem 0;
                border: 2px solid white;
            }

            .img-ans {
                width: 100%;
            }

            .question {
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                margin-top: 0.5rem;
            }
            .accordian-open {
                margin: 1rem 0;
                background: rgba(255, 255, 255, 0.147);
                .toggle {
                    transform: rotate(45deg);
                }
                .answer-container {
                    height: max-content;
                    margin-top: 0 !important;

                    .links {
                        margin-bottom: 0.2rem !important;
                        a {
                            border-bottom: 1px solid;
                        }
                    }
                }
            }

            img {
                width: 15px;
                transition: transform 0.2s ease-out;
            }

            .accordian_open.question {
                font-weight: 600;
                letter-spacing: 1px;
            }

            .line {
                width: 100%;
                height: 1px;
                background: rgba(255, 255, 255, 0.247);
            }

            .accordian_open img {
                transform: rotate(45deg);
                transition: transform 0.2s ease-in;
            }

            .answer {
                text-align: left;
                width: 70%;
                letter-spacing: 1px;
                /* margin-: 0.5rem; */
                font-weight: 300;
                line-height: 24px;
                color: rgba(255, 255, 255, 0.568);
                height: 0;
                transition: height 0.2s ease-in;
                overflow: hidden;

                a {
                    text-decoration: underline;
                }
            }

            .ans_open {
                padding-top: 0.5rem;
                height: max-content;
                transition: height 0.2s ease-in;
            }

            button {
                border: none;
                background: black;
                padding: 1rem 2rem;
                color: blanchedalmond;
                border-radius: 0.2rem;
                margin-top: 1rem;
            }
        }
    }
`;

export default Faq;
