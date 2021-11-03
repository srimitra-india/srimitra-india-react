import React from "react";
import styled from "styled-components";

const KnowingSrimitra = () => {
    return (
        <Container>
            <div className="container">
                <h2 className="title">What is SriMitra?</h2>
                <div className="intro">
                    <div className=" quote intro-text">
                        Imagine a young orphan kid, dressed in tatters that
                        barely covers him in the cold harsh winters, standing
                        along the road, begging for alms. His blue shivering
                        lips are filled with kind desperate requests for help.
                        Sounds familiar? Almost all of us have encountered such
                        a pitiful sight that leaves us filled with utter sadness
                        and rue. All of us must have taken action once in a
                        while,donating money in the name of kindness to donation
                        sites. But do we have any answer to what happens with
                        this heartfelt contribution of ours? We all have this
                        clueless phase, where we are left in the dark . But due
                        to lack of a method to help them we continue on our way
                        with our hearts laden heavy with despair.
                    </div>
                    {/* <img
                        className="intro-png"
                        src="/images/hello.png"
                        alt=""
                        srcSet=""
                    /> */}
                </div>
                <h3 className="title">Here’s where SriMitra comes in</h3>
                <div className="para">
                    <div className="quote">
                        We are a community dedicated to food adequacy for
                        Orphanages, that directly sources food from grocery
                        marts and stores to orphanages. Since money is not
                        involved it ensures greater transparency.
                    </div>
                    <div className="p2">
                        People are hesitant to donate money, and every once in a
                        while, news about misused funds doesn’t alleviate the
                        suspicions either.
                    </div>
                    <div className="p2">
                        We at SriMitra India want to establish a bond of trust
                        and help feed the hands that will one day shape our
                        future. All you have to do is download our app or visit
                        our website, while shopping at a grocery chain or
                        online, contribute a small portion of food to keep these
                        tough beautiful smiles curved.
                    </div>
                    <div className="p2">
                        Your contribution is directly converted into a food
                        order for an orphanage near you. Once the order reaches
                        the orphanage, a delivery confirmation and update is
                        shared at the very moment. All our transactions are
                        publicly visible to users anytime, ensuring trust and
                        transparency.
                    </div>
                    <div className="quote">
                        SriMitra is all of us when we decide to take action to
                        make a difference in the lives of these precious
                        children. SriMitra is all of us when we decide to
                        provide each child a world worth living in.
                        <br />
                        <br />
                        We hope that with your help our combined efforts are one
                        day adequate enough to feed each one of these little
                        angels
                    </div>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.section`
    width: 100%;
    margin-top: 70px;
    background: hsl(0, 0%, 100%, 0.9);
    position: relative;
    color: hsl(187, 100%, 12%);
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;

    .container {
        /* border: 1px solid; */
        max-width: 1440px;
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .intro,
        .para {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .intro-png {
                width: 100%;
                border-radius: 0.2rem;
                border: 2px solid;
                box-shadow: 0 4px 10px hsla(187, 100%, 20%, 0.2);
            }
        }
    }

    @media (min-width: 700px) {
        .container {
            /* border: 1px solid; */
            font-weight: 500;
            max-width: 1440px;
            width: 100%;
            height: max-content;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .intro {
                display: flex;
                flex-direction: row;
                gap: 2rem;

                .quote {
                    display: flex;
                    align-items: center;
                    /* padding: 4rem; */
                }
                .intro-png {
                    /* height: 200px; */
                    width: 30%;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 0.2rem;
                    border: 2px solid;
                    box-shadow: 0 4px 10px hsla(187, 100%, 20%, 0.2);
                }
            }

            .para {
                flex-direction: column;
            }
        }
    }
`;

export default KnowingSrimitra;
