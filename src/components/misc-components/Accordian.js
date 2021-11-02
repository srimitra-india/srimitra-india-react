import react from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Accordian = (props) => {
    console.log(props.ques);

    const [expanded, setExpanded] = useState(false);
    // .accordian-open

    return (
        <div
            className={!expanded ? "accordian" : "accordian accordian-open"}
            onClick={() => setExpanded(!expanded)}
        >
            <div class="question">
                <p class="ques p2">{props.ques.ques}</p>
                <img className="toggle" src="/images/faq-toggle.png" alt="" />
            </div>
            <div
                className={
                    !expanded
                        ? "answer-container"
                        : "answer-container answer-container-open"
                }
            >
                {props.ques.ansType == "text" ? (
                    <p class="answer p3">{props.ques.answer}</p>
                ) : (
                    ""
                )}

                {props.ques.ansType == "img" ? (
                    <img
                        className="img-ans"
                        src={props.ques.answer}
                        alt=""
                        srcset=""
                    />
                ) : (
                    ""
                )}

                {props.ques.ansType == "link" ? (
                    <>
                        <p class="answer p3">{props.ques.answer}</p>
                        <div
                            className="links"
                            style={{ textDecoration: "underlined" }}
                        >
                            {props.ques.links.map((link, key) => (
                                <Link to={link.add}>
                                    {link.name}
                                    {console.log(link)}
                                </Link>
                            ))}
                        </div>
                    </>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Accordian;
