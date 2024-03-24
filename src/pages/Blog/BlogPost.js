import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AWS from 'aws-sdk';

// css
import '../../css/Blog/BlogPost.css';
import { IoArrowBack } from "react-icons/io5";

// define blog post sections style 
const Subtitle = ({ content }) => <div className='blog-post-subtitle page-title-1-bold'>{content}</div>;
const Text = ({ content }) => <div className='blog-post-text'>{content}</div>;


const BlogPost = () => {
    const { blogId } = useParams(); // Get the blogId from the URL parameter
    const [blog, setBlog] = useState('');

    useEffect(() => {
        AWS.config.update({
            apiVersion: 'latest',
            region: process.env.REACT_APP_AWS_REGION,
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
        });
    
        fetchBlogPost(blogId);
    });

    // Function to fetch the blog content from AWS DynamoDB
    const fetchBlogPost = async () => {
        try {
            const dynamodb = new AWS.DynamoDB.DocumentClient();
            const params = {
                TableName: "hippsc-blog",
                Key: { blogID: blogId }
              };
        
            const result = await dynamodb.get(params).promise();
        
            if (result.Item) {
                setBlog(result.Item);
            } else {
                console.error('Blog post not found');
            }

            if (blog.blogImageUrl === undefined) {
                console.log('blogImageUrl is undefined');   
                return
            }
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            console.error('Error stack trace:', error.stack);
        }
    };

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div className='blog-post'>
            {/* metadata */}
            <Helmet>
                <title>{blog.blogTitle} | HIPPSC {blog.blogType}</title>
                <meta 
                    name="description" 
                    content="Welcome to HIPPSC's blog page, your gateway to 
                    the world of precision engineering, cutting-edge technology, and manufacturing 
                    excellence. Dive into a treasure trove of industry insights, expert advice,
                    and practical knowledge tailored for professionals in the machining and manufacturing sectors." 
                />
                <meta name="keywords" content="machinery, shrink fit, tool holders, cnc machining, latest news, blog" />
            </Helmet>

            <div className="blog-post-body">
                {/* back button */}
                <Link to='/blog' className="blog-post-back">
                    <div className="blog-post-back-icon">
                        <IoArrowBack />
                    </div>
                    <div className="blog-post-back-text">
                        Back
                    </div>
                </Link>

                {/* title */}
                <div className="blog-post-title page-title-1-xl">
                    {blog.blogTitle}
                </div>

                {/* header */}
                <div className="blog-post-header">
                    <div className="blog-post-type">
                        {blog.blogType}
                    </div>
                    <div className="divider">
                        |
                    </div>
                    <div className="blog-post-date">
                        {blog.blogDatetime}
                    </div>
                </div>

                {/* image */}
                <div className="blog-post-image">
                    <img src={blog.blogImageUrl} alt="blog-thumbnail" />
                </div>


                {/* section */}
                <div className="blog-post-section">
                    {blog.blogSection.map((section, index) => {
                        switch (section.type) {
                            case 'subtitle':
                                return <Subtitle key={index} content={section.content} />;
                            case 'text':
                                return <Text key={index} content={section.content} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogPost;