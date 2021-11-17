import styled from "styled-components";
import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import blogs from "../../data/blogs";

const SinglePageBlog = () => {
    const urlId = useParams().id;
    console.log();
    let blog = {};
    let keywordsString = "";

    blogs.forEach((b) => {
        if (b.id === urlId) {
            blog = b;
        }
    });

    blog.keywords.forEach((keyword) => {
        keywordsString += `${keyword}, `;
    });
    console.log(keywordsString);

    function createMarkup() {
        return { __html: blog.body };
    }

    return (
        <Container>
            <Helmet>
                <title>SriMitra | {blog.title}</title>
                <meta name="keywords" content={keywordsString}></meta>
            </Helmet>

            <section className="blog_container">
                <div className="sub">
                    <div className="title">
                        <h2 className="blog_title">{blog.title}</h2>
                        <div className="p2 time">{blog.time}</div>
                    </div>
                    <div className="blog_sub_container">
                        <img src={blog.image} alt="blog" />
                        <div
                            className="p2 blog_body"
                            dangerouslySetInnerHTML={createMarkup()}
                        />
                    </div>
                </div>
            </section>
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    background-image: url("../../images/Logo_butterfly_only_dark.png");
    background-repeat: repeat;
    background-size: 150px;
    width: 100%;
    padding: 0;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .time {
            font-weight: 500;
        }
    }

    .blog_container {
        background: hsl(0, 0%, 100%, 0.9);
        padding-top: 85px;
        /* border: 2px solid red; */
        height: 100%;
        width: 100%;
        color: black;
        color: hsl(187, 100%, 15%);

        .sub {
            gap: 1rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            max-width: 1440px;
        }
        .blog_sub_container {
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
        }

        img {
            width: 100%;
            border-radius: 6px;
        }

        .blog_title {
            text-transform: uppercase;
        }
        .blog_body {
            font-weight: 450;
        }
    }

    @media (min-width: 600px) {
        .blog_container {
            background: hsl(0, 0%, 100%, 0.9);
            height: 100%;
            width: 100%;
            color: black;
            display: flex;
            justify-content: center;
            gap: 1rem;
            color: hsl(187, 100%, 15%);

            .title {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
            }

            .sub {
                padding-top: 50px;
                gap: 2rem;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                max-width: 1440px;
            }

            .blog_sub_container {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                gap: 2rem;
            }

            img {
                max-width: 400px;
                max-height: 700px;
                flex: 0.3;
            }

            .blog_body {
                flex: 1;
                border-radius: 6px;
                font-weight: 450 !important;
                padding: 2rem;
                border: 3px solid hsl(187, 100%, 15%);
                color: hsl(187, 100%, 15%);
                background: hsla(187, 100%, 15%, 0.1);
            }
        }
    }
`;

export default SinglePageBlog;
