import React, { useState } from "react";
import { Link } from "react-router-dom";

const Accordian = (props) => {
    const [expanded, setExpanded] = useState(false);
    // .accordian-open

    return (
        <div
            className={!expanded ? "accordian" : "accordian accordian-open"}
            onClick={() => setExpanded(!expanded)}
        >
            <div className="question">
                <p className="ques p2">{props.ques.ques}</p>
                <img className="toggle" src="/images/faq-toggle.png" alt="" />
            </div>
            <div
                className={
                    !expanded
                        ? "answer-container"
                        : "answer-container answer-container-open"
                }
            >
                {props.ques.ansType === "text" ? (
                    <p className="answer p3">{props.ques.answer}</p>
                ) : (
                    ""
                )}

                {props.ques.ansType === "img" ? (
                    <img
                        className="img-ans"
                        src={props.ques.answer}
                        alt=""
                        srcSet=""
                    />
                ) : (
                    ""
                )}

                {props.ques.ansType === "link" ? (
                    <>
                        <p className="answer p3">{props.ques.answer}</p>
                        <div
                            className="links"
                            style={{ textDecoration: "underlined" }}
                        >
                            {props.ques.links.map((link, key) => (
                                <Link key={key} to={link.add}>
                                    {link.name}
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
