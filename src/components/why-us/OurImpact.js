import styled from "styled-components";
import React from "react";

const OurImpact = () => {
    return (
        <Container>
            {" "}
            <div className="content">
                <h2 className="title">OUR IMPACT</h2>
                <div className="quote">
                    A heartfelt anecdote by our founder, Reshma Singh
                </div>
                <div className="para p2">
                    A visit to an Orphanage is a life-changing experience that
                    leaves the heart brimming with emotions and sentiments. I
                    was extremely lucky to get an opportunity to visit an
                    Orphanage (shelter home for kids) during this saddening
                    pandemic year.
                </div>
                <div className="para p2">
                    The orphanage provided for about 40 children with 4
                    care-takers and a woman in charge. It was a two-storey
                    building with old, worn off walls. The house seemed to be in
                    desperate need of repairs and seemed to have survived all
                    these years without maintenance. The house consisted of a
                    common hall with a few mattresses piled up. The walls were
                    adorned with small red and yellow color lockers along with a
                    few bunk beds spread around the room sparsely. Its
                    dilapidated state reminded me of the withering away skeleton
                    of a beast that had seen better days.
                </div>
                <div className="para p2">
                    Most of the bright children were watching TV when I entered
                    their home. A few others were indulging in breakfast while
                    some of the boys were already out for studies. The age group
                    of these little angels ranged from 5 years to 14 years.
                </div>
                <div className="para p2">
                    As soon as I stepped in, all these precious children stared
                    at me with eyes wide with wonder and hope. Their cute and
                    sweet faces resembled that of a curious little bunny, filled
                    with wonder at the sight before it.
                </div>
                <div className="para p2">
                    In a small gesture of help , I had decided to bring some
                    food, cold drinks, books, chocolates, pens and such things
                    to help the orphanage. To ensure easy and organised
                    distribution, the orphanage staff helped me segregate the
                    things. I even got the precious opportunity to talk to some
                    of these little angels individually too. I decided to spend
                    the rest of the day playing indoor games with the children.
                    I even garnered a few wins for my team when we were all
                    playing some team sports games. Those precious moments when
                    we all seemed to be smiling without any hindrances, our
                    hearts content and filled with joy, made this entire trip
                    all the more special for me.
                </div>
                <div className="para p2">
                    After interacting with the children, I found out that
                    everyone had been in that shelter home for the past 2 months
                    as schools were closed. Regardless of the harsh conditions
                    outside each of these little angels seemed to be so active
                    and happy there. It felt like the time to say goodbye came
                    too soon. I couldn't wait to visit them again and spend
                    another such great memorable day with them.
                </div>
                <div className="para p2">
                    A single visit to the orphanage can be so eye opening. It
                    makes you more grateful for the little things in life when
                    you see people who don’t even have something that we take
                    for granted. Only at such times do you tide over the
                    insignificant and immaterial problems in your life and start
                    to truly appreciate the bigger picture.
                </div>
                <div className="para p2">
                    I feel extremely fortunate that I have my parents with me
                    but these little angels don’t.
                </div>
                <div className="quote">
                    BUT THAT DOESN'T MEAN THEY ARE ALONE. <br />
                    THEY ARE LOVED AND EACH ONE OF THEM DESERVES TO BE
                    CHERISHED.
                </div>
                <div className="para p2">
                    According to the United Nations Children’s Fund (UNICEF),
                    India has 29.6 million orphaned and abandoned children.
                    According to Childline India Foundation (CIF),in 2017, of
                    these roughly 30 million children, only 470,000 children
                    were in institutionalized care. This means that there needs
                    to be a huge readjustment in the government’s focus on child
                    development because currently millions of these precious
                    children’s lives are being wasted.They’re being denied a
                    future of opportunities to realise themselves.
                </div>
                <div className="para p2">
                    A single-click donation on our app can help feed these
                    innocent children who’ve lost their parents and desperately
                    need your help. A small donation such as a thousand rupees
                    monthly can help keep the bright light in these young hearts
                    lit. Your single step to help share the responsibility can
                    help uplift your local economy, enabling your local stores
                    and manufacturers to improve their sales and widen their
                    customer base, helping build a happier healthier community.
                </div>
            </div>{" "}
        </Container>
    );
};

const Container = styled.section`
    background: hsla(0, 0%, 100%, 0.9);
    /* background: white; */
    margin-top: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: hsl(187, 100%, 12%);
    .content {
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;

        .quote {
            width: 100%;
            font-size: 1.2rem;
            text-transform: uppercase;
        }

        .title {
            width: 100%;
        }

        .para {
            font-weight: 450;
            letter-spacing: 1px;
        }
    }

    @media (min-width: 700px) {
        .content {
            gap: 1.5rem;
        }
    }
`;

export default OurImpact;
