import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <Container>
            <div className="comment">OOOOPPSS!!</div>
            <div className="title">Page Not Found : 404</div>
            <Link to="/" className="cta">
                Head To Home
            </Link>
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    margin-top: 70px;
    color: hsl(187, 100%, 18%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    min-height: 80vh;
    gap: 2rem;

    .comment {
        font-weight: 800;
        font-size: 3rem;
    }

    .title {
        /* font-size: 2rem; */
    }

    .cta {
        color: hsl(187, 100%, 18%);
        border-color: hsl(187, 100%, 18%);
    }

    .cta:hover {
        color: white;
        background: hsl(187, 100%, 18%);
        border-color: hsl(187, 100%, 18%);
    }
`;

export default Error404;
