import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const GroceryStores = () => {
    const history = useHistory();

    const [shopName, setshopName] = useState("");
    const [adressShop, setadressShop] = useState("");
    const [shopRegistration, setshopRegistration] = useState("");
    const [shopGST, setshopGST] = useState("");
    const [merchantName, setmerchantName] = useState("");
    const [merchantPAN, setmerchantPAN] = useState("");
    const [merchantAdhaar, setmerchantAdhaar] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        try {
            const res = await fetch(
                "https://sheet.best/api/sheets/987c4f47-0902-43db-a0eb-78df5255e0be",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        shopName,
                        adressShop,
                        shopRegistration,
                        shopGST,
                        merchantName,
                        merchantPAN,
                        merchantAdhaar,
                        email,
                        phone,
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
                    <label className="label p2" htmlFor="NameOfShop">
                        Name Of Shop
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="NameOfShop"
                        placeholder="Name of your shop"
                        type="text"
                        name="NameOfShop"
                        onChange={(e) => setshopName(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="AddressOfShop">
                        Address Of Shop
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="AddressOfShop"
                        placeholder="Address of your shop"
                        type="text"
                        name="AddressOfShop"
                        onChange={(e) => setadressShop(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="ShopRegitration">
                        Regitration Number of Shop
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="ShopRegitration"
                        placeholder="Regitration Number"
                        type="text"
                        name="ShopPAN"
                        onChange={(e) => setshopRegistration(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="GST">
                        GST Number of Shop
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="GST"
                        placeholder="GST Number"
                        type="text"
                        name="GST"
                        onChange={(e) => setshopGST(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="MerchantName">
                        Merchant Name
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="MerchantName"
                        placeholder="Name of the merchant"
                        type="text"
                        name="MerchantName"
                        onChange={(e) => setmerchantName(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="MerchantPAN">
                        PAN Number of Merchant
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="MerchantPAN"
                        placeholder="PAN Number"
                        type="text"
                        name="MerchantPAN"
                        onChange={(e) => setmerchantPAN(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label className="label p2" htmlFor="MerchantAdhaar">
                        Adhaar Number of Merchant
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="MerchantAdhaar"
                        placeholder="Adhaar Number"
                        type="text"
                        name="MerchantAdhaar"
                        onChange={(e) => setmerchantAdhaar(e.target.value)}
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
                    <label className="label p2" htmlFor="phone">
                        Phone No.
                    </label>
                    <input
                        autoComplete="off"
                        className="input-field"
                        id="phone"
                        placeholder="Your Phone Number"
                        type="text"
                        name="Phone"
                        onChange={(e) => setPhone(e.target.value)}
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

export default GroceryStores;
