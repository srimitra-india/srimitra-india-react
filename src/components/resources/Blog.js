import styled from "styled-components";
import React from "react";
import blogs from "../../data/blogs";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <Container className="hi">
            <div className="blogs">
                {console.log(blogs.length)}
                {blogs.length === 0 && (
                    <h2 className="errors">There are no blogs published</h2>
                )}
                {blogs.length > 0 &&
                    blogs.map((blog, key) => (
                        <Link
                            to={`/single/${blog.id}`}
                            // to="/single"
                            className="blog"
                            key={key}
                        >
                            <img
                                className="blog_image"
                                src={blog.image}
                                alt={blog.title}
                                srcSet=""
                            />
                            <div className="blog_details">
                                <div className="blog_details__time">
                                    {blog.time}
                                </div>
                                <div className="blog_details__title">
                                    {blog.title}
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </Container>
    );
};

const Container = styled.section`
    padding-top: 70px;
    background: hsla(0, 0%, 100%, 0.9) !important;
    color: black;
    display: grid;
    place-items: center;
    .errors {
        text-align: center;
    }

    .blogs {
        /* border: 2px solid red; */
        display: grid;
        flex-direction: column;
        gap: 2rem;
        padding: 5rem 0;
        color: hsl(187, 100%, 18%);
    }

    .blog {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        width: 100%;
        max-width: 350px;
        position: relative;

        background: hsla(181, 30%, 37%, 0.3);
        border-radius: 6px;
        overflow: hidden;

        .blog_image {
            width: 100%;
            height: 600px;
            aspect-ratio: 9/16;
            box-shadow: 0 4px 20px hsla(181, 30%, 37%, 1);
        }

        .blog_details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 500;
            flex-direction: column;
            padding: 1rem;

            .blog_details__title {
                font-size: 1.5rem;
            }
        }
    }

    @media (min-width: 600px) {
        .blogs {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .errors {
            grid-column: 1/3;
        }
    }
    @media (min-width: 1000px) {
        .blogs {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 5rem;
        }

        .errors {
            grid-column: 1/4;
        }

        .blog_details {
            opacity: 0;
            background: hsla(187, 100%, 10%, 0.9);
            position: absolute;
            top: 0;
            left: 0;
            color: hsla(181, 30%, 100%, 1);
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center !important;
            align-items: center;
            font-weight: 500;
            flex-direction: column;
            padding: 1rem;
            transition: all 150ms ease;
            letter-spacing: 1px;

            .blog_details__title {
                font-size: 1.5rem;
            }

            .blog_details__time {
                display: none;
            }
        }

        .blog:hover .blog_details {
            opacity: 1;
        }
    }
`;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ad, aut numquam consectetur neque enim esse dolorum non exercitationem sunt dolorem nemo ipsa accusamus praesentium voluptatibus eligendi quod temporibus veritatis doloremque voluptate sequi quae excepturi placeat! Hic culpa exercitationem architecto iusto, explicabo reprehenderit expedita consequatur similique sunt neque consequuntur sit.

export default Blog;
