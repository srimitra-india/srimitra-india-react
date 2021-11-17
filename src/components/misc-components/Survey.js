import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Survey = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [profession, setProfession] = useState("");
    const [noTrust, setNoTrust] = useState("");
    const [noDonate, setNoDonate] = useState("");
    const [mobileApp, setMobileApp] = useState("");
    const [freq, setFreq] = useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                "https://sheet.best/api/sheets/3c9bbd4a-d679-4bdd-be8e-bcdfb36e354e",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        age: age,
                        profession: profession,
                        reason_of_no_trust: noTrust,
                        reason_of_not_donating: noDonate,
                        likelines_for_mobile_app: mobileApp,
                        frequency_of_donation: freq,
                        amount_for_donation: amount,
                    }),
                }
            );
            if (res.ok) {
                history.replace("/");
                alert("Thanks for your patience, survey was filled.");
            }
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <Container>
            <section className="form-section">
                <div className="title">
                    <span className="" role="img" aria-label="emoji">
                        👋🏻
                    </span>
                    <p className="p2 intro-text">
                        Hello There, How are you doing... <br />
                        Let's start by Knowing about your some more.
                    </p>
                </div>

                <form
                    className="form-container"
                    name="questionnaire"
                    onSubmit={handleSubmit}
                    method="POST"
                >
                    <div className="input-box">
                        <label className="label p2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="input-field"
                            id="name"
                            placeholder="Your Name"
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <p className="p p2" htmlFor="age">
                            Age
                        </p>

                        <div className="radio-buttons">
                            <div>
                                <input
                                    type="radio"
                                    id="12 - 18"
                                    name="age"
                                    value="12 - 18"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <label htmlFor="12 - 18">12 - 18</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="19 - 30"
                                    name="age"
                                    value="19 - 30"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <label htmlFor="19 - 30">19 - 30</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="31 - 40"
                                    name="age"
                                    value="31 - 40"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <label htmlFor="31 - 40">31 - 40</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="41 - 50"
                                    name="age"
                                    value="41 - 50"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <label htmlFor="41 - 50">41 - 50</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="51 - 60"
                                    name="age"
                                    value="51 - 60"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <label htmlFor="51 - 60">51 - 60</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="61 - 70"
                                    name="age"
                                    value="61 - 70"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <label htmlFor="61 - 70">61 - 70</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="Above 70"
                                    name="age"
                                    value="Above 70"
                                    onChange={(e) => setAge(e.target.value)}
                                />
                                <label htmlFor="Above 70">Above 70</label>
                            </div>
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="profession">Profession</label>
                        <select
                            name="profession"
                            id="profession"
                            onChange={(e) => setProfession(e.target.value)}
                        >
                            <option value="Self Employed">Self Employed</option>
                            <option selected value="Salaried">
                                Salaried
                            </option>
                            <option value="Student">Student</option>
                            <option value="Home Maker">Home Maker</option>
                        </select>
                    </div>

                    <div className="input-box">
                        <label htmlFor="reason-of-no-trust">
                            Reason you don't trust donation platforms?
                        </label>
                        <select
                            name="reason-of-no-trust"
                            id="reason-of-no-trust"
                            onChange={(e) => setNoTrust(e.target.value)}
                        >
                            <option value="Less Transparency">
                                Less Transparency
                            </option>
                            <option value="No Feedback">No Feedback</option>
                            <option value="Lack of awareness on usage of funds">
                                Lack of awareness on usage of funds
                            </option>
                        </select>
                    </div>

                    <div className="input-box">
                        <label htmlFor="reason-of-not-donating">
                            Reason you don't donate?
                        </label>
                        <select
                            name="reason-of-not-donating"
                            id="reason-of-not-donating"
                            onChange={(e) => setNoDonate(e.target.value)}
                        >
                            <option value="Less Income">Less Income</option>
                            <option value="Do not trust donation institutions">
                                Do not trust donation institutions
                            </option>
                            <option value="Lack of awareness about the right platforms of donation ">
                                Lack of awareness about the right platforms of
                                donation{" "}
                            </option>
                            <option value="One time donation does not satisfy your cause">
                                One time donation does not satisfy your cause
                            </option>
                        </select>
                    </div>

                    <div className="input-box">
                        <label htmlFor="likelines-for-mobile-app">
                            How likely are you to adopt an easy convenient
                            mobile app like SriMitra for donation? ( 5 Being the
                            most likely )
                        </label>

                        <div className="radio-buttons">
                            <div>
                                <input
                                    type="radio"
                                    id="1"
                                    name="likelines-for-mobile-app"
                                    value="1"
                                    onChange={(e) =>
                                        setMobileApp(e.target.value)
                                    }
                                />
                                <label htmlFor="1">1</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="2"
                                    name="likelines-for-mobile-app"
                                    value="2"
                                    onChange={(e) =>
                                        setMobileApp(e.target.value)
                                    }
                                />
                                <label htmlFor="2">2</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="3"
                                    name="likelines-for-mobile-app"
                                    value="3"
                                    onChange={(e) =>
                                        setMobileApp(e.target.value)
                                    }
                                />
                                <label htmlFor="3">3</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="4"
                                    name="likelines-for-mobile-app"
                                    value="4"
                                    onChange={(e) =>
                                        setMobileApp(e.target.value)
                                    }
                                />
                                <label htmlFor="4">4</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="5"
                                    name="likelines-for-mobile-app"
                                    value="5"
                                    onChange={(e) =>
                                        setMobileApp(e.target.value)
                                    }
                                />
                                <label htmlFor="5">5</label>
                            </div>
                        </div>
                    </div>

                    <div className="input-box">
                        <label htmlFor="frequency-of-donation">
                            How frequently would you like to donate?
                        </label>
                        <select
                            name="frequency-of-donation"
                            id="frequency-of-donation"
                            onChange={(e) => setFreq(e.target.value)}
                        >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Bi-Monthly">Bi-Monthly</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>

                    <div className="input-box">
                        <label htmlFor="amount-for-donation">
                            How much would you prefer to donate?
                        </label>
                        <select
                            name="amount-for-donation"
                            id="amount-for-donation"
                            onChange={(e) => setAmount(e.target.value)}
                        >
                            <option value="500 - 1000">500 - 1000</option>
                            <option value="1000 - 5000">1000 - 5000</option>
                            <option value="5000 - 10000">5000 - 10000</option>
                            <option value="10000 - 50000">10000 - 50000</option>
                            <option value="More Than 50000">
                                More Than 50000
                            </option>
                        </select>
                    </div>

                    <input
                        type="submit"
                        name="Submit"
                        id="submit"
                        className="button cta"
                        value="Submit"
                    />
                </form>
            </section>
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

export default Survey;
