import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

const Orphanages = () => {
    const history = useHistory();

    const [name, setname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [trustName, settrustName] = useState("");
    const [trusteeName, settrusteeName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        try {
            const res = await fetch(
                "https://sheet.best/api/sheets/ece5baa1-2529-43a3-a4fc-dbb1db289c02",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        address,
                        trustName,
                        trusteeName,
                    }),
                }
            );
            if (res.ok) {
                // alert("Form Sent");
            }
        } catch (err) {
            console.log(err.message);
        }
        history.replace("/");
        e.target.reset();
    };

    return (
        <Container className="form-section">
            <div className="title">
                <span className="" role="img" aria-label="emoji">
                    👋🏻
                </span>
                <p className="p2 intro-text">Hello, Lets get in touch.</p>
            </div>
            <form
                onSubmit={handleSubmit}
                method="POST"
                className="form-container"
                name="contact-us"
            >
                <div className="input-box">
                    <label className="label p2" htmlFor="NameOfOrphange">
                        Name Of Orphanage
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="NameOfOrphange"
                        placeholder="Name of your Orphange"
                        type="text"
                        name="NameOfOrphange"
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="mobileNumber">
                        Mobile Number
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="mobileNumber"
                        placeholder="Mobile Number"
                        type="text"
                        name="mobileNumber"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="email">
                        Email
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="email"
                        placeholder="Your Email"
                        type="text"
                        name="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="Address">
                        Address
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="Address"
                        placeholder="Address"
                        type="text"
                        name="Address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="TrustName">
                        Trust Name
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="TrustName"
                        placeholder="Name"
                        type="text"
                        name="TrustName"
                        onChange={(e) => settrustName(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="TrusteeName">
                        Trustee Name
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="TrusteeName"
                        placeholder="Name"
                        type="text"
                        name="TrusteeName"
                        onChange={(e) => settrusteeName(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    name="Submit"
                    id="submit"
                    className="button cta"
                    value="Submit"
                />
            </form>
        </Container>
    );
};

const Container = styled.section`
    margin-top: 70px;
    background-color: black;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem !important;
    gap: 2rem;
    padding: 0;
    max-width: 100%;
    .title {
        border: none;
    }

    .form-section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 1440px;
        padding: 0;
    }

    span {
        font-size: 2rem;
    }

    .intro-text {
        color: rgba(255, 255, 255, 0.76);
        letter-spacing: 1px;
        line-height: 24px;
        font-weight: 400;
    }

    .form-container {
        // border: 1px solid;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        align-items: center;
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
            div {
                /* border: 1px solid; */
                display: flex;
                align-items: center;
                gap: 0.2rem;
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

    .cta {
        border-radius: 0;
        width: 100%;
        height: 60px;
        border-width: 1px;
    }

    .button {
        cursor: pointer;
        font-size: 1rem;
        grid-column: 1/3;
        background: #ffa800;
        border: none;
        border-radius: 0.4rem;
        width: 100%;
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

    .radio-buttons {
        // border: 1px solid;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 1rem;
    }

    select {
        background: none;
        border: none;
        outline: none;
        border: 1px solid white;
        // color: rgb(99, 96, 96);
        padding: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        border-radius: 0.2rem;
        color: white;
        /* background-color: red; */

        option {
            /* border: 2px solid;
            background: hsl(40, 100%, 43%, 0.5);
            background-color: hsl(40, 100%, 43%, 0.5); */
            color: black;
            padding: 0.5rem;
        }
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

export default Orphanages;
