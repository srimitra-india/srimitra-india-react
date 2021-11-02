import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContactUs = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                "https://sheet.best/api/sheets/36f9895c-d200-46d7-98cc-7f13e11a140b",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        message,
                    }),
                }
            );
            if (res.ok) {
                history.replace("/");
                alert("Form Sent");
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <Container className="form-section">
            <div class="title">
                <span class="">👋🏻</span>
                <p class="p2 intro-text">Hello, Lets get in touch.</p>
            </div>
            <form
                onSubmit={handleSubmit}
                method="POST"
                class="form-container"
                name="contact-us"
            >
                <div class="input-box">
                    <label class="label p2" for="name">
                        Name
                    </label>
                    <input
                        autocomplete="off"
                        class="input-field"
                        id="name"
                        placeholder="Your Name"
                        type="text"
                        name="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="input-box">
                    <label class="label p2" for="email">
                        Email
                    </label>
                    <input
                        autocomplete="off"
                        class="input-field"
                        id="email"
                        placeholder="Your Email"
                        type="text"
                        name="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="input-box">
                    <label class="label p2" for="phone">
                        Phone No.
                    </label>
                    <input
                        autocomplete="off"
                        class="input-field"
                        id="phone"
                        placeholder="Your Phone Number"
                        type="text"
                        name="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div class="input-box">
                    <label class="label p2" for="message">
                        Message
                    </label>
                    <textarea
                        autocomplete="off"
                        class="input-field"
                        id="message"
                        placeholder="Your Message"
                        name="Message"
                        id=""
                        cols="30"
                        rows="5"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    name="Submit"
                    id="submit"
                    class="button cta"
                    value="Submit"
                />
            </form>
        </Container>
    );
};

const Container = styled.section`
    background-color: black;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10rem 2rem !important;
    gap: 2rem;
    margin-top: 70px;
    padding: 0;
    max-width: 100%;

    .title {
        text-align: center;
        border: none;
    }

    span {
        font-size: 2rem;
        /* border: 1px solid; */
    }

    .intro-text {
        color: rgba(255, 255, 255, 0.76);
        letter-spacing: 1px;
        line-height: 24px;
        font-weight: 400;
    }

    .form-container {
        /* border: 1px solid; */
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 2rem;
        max-width: 1440px;
        width: 100%;
    }

    .input-box {
        border-radius: 0.5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.07);
        border: 2px solid rgba(255, 255, 255, 0.2);
        gap: 1rem;
        padding: 1rem;
        height: max-content;

        p,
        label {
            color: #ffa800;
        }

        .radio-buttons {
            label {
                color: white;
            }
        }
    }

    label {
        color: rgb(255, 255, 255);
        letter-spacing: 1px;
        font-weight: 400;
    }

    input {
        outline: none;
        height: max-content;
    }

    input:focus,
    textarea:focus {
        outline: none;
        // border: none;
    }

    .input-field {
        background: none;
        border: none;
        padding: 0.5rem 0;
        // border: 1px solid rgba(255, 255, 255, 0.247);
        border-bottom: 2px solid rgba(255, 255, 255, 0.582);
        // border-radius: 0.2rem;
        font-size: 1rem;
        font-weight: 300;
        color: white;
        letter-spacing: 1px;
    }

    .input-field:focus {
        border-bottom: 2px solid rgb(255, 255, 255);
    }

    .button {
        cursor: pointer;
        font-size: 1rem;
        grid-column: 1/3;
        width: 300px !important;
        background: #ffa800;
        border: none;
    }

    .button:hover {
        background: none;
        border: 2px solid #ffa800;
        color: #ffa800;
    }

    input::placeholder,
    textarea::placeholder {
        margin: 1rem;
        color: rgba(255, 255, 255, 0.582);
        opacity: 1;
        font-size: 1rem;
    }

    input:active {
        border-bottom: 1px solid rgba(255, 255, 255, 0.651);
    }

    .cta {
        border-radius: 0 !important;
        width: 100%;
        height: 60px;
        border-width: 1px;
    }

    .radio-buttons {
        // border: 1px solid;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 1rem;
    }

    select {
        background: white;
        border: none;
        outline: none;
        border: 1px solid white;
        // color: rgb(99, 96, 96);
        padding: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1px;
    }

    @media only screen and (min-width: 1175px) {
        .form-container {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            place-items: center;

            .input-box {
                height: 130px !important;
            }
        }
    }
`;

export default ContactUs;
