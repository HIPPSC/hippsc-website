import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import AWS from 'aws-sdk';

// css
import '../../css/Blog/BlogPost.css';
import { IoArrowBack } from "react-icons/io5";

// Skeleton
import { BlogPostSkeleton } from '../../components/Feedback/Skeleton';

// define blog post sections style 
const Subtitle = ({ content }) => <h2 className='blog-post-subtitle page-title-2'>{content}</h2>;
const Text = ({ content }) => <div className='blog-post-text'>{content}</div>;


const BlogPost = () => {
    // Get the blogId from state
    const location = useLocation();
    const { blogID } = location.state;

    // Get url blogTitle
    const params = useParams();
    const blogTitle = params.blogTitle;

    // State variables
    const [blog, setBlog] = useState('');
    const [loading, setLoading] = useState(true);

    // Function to fetch the blog content from AWS DynamoDB
    const fetchBlogPost = useCallback(async () => {
        console.log(blogID);
        setLoading(true);
        try {
            const dynamodb = new AWS.DynamoDB.DocumentClient();
            const params = {
                TableName: "hippsc-blog",
                Key: { blogID: blogID }
            };
    
            const result = await dynamodb.get(params).promise();
    
            if (result.Item) {
                setBlog(result.Item);
            } else {
                console.error('Blog post not found');
            }
    
            if (blog.blogImageUrl === undefined) {
                console.log('blogImageUrl is undefined');
                return;
            }
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            console.error('Error stack trace:', error.stack);
        }
    }, [blogID, blog.blogImageUrl]); 

    useEffect(() => {
        AWS.config.update({
            apiVersion: 'latest',
            region: process.env.REACT_APP_AWS_REGION,
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
        });
        fetchBlogPost(blogID);
        setLoading(false);
    }, [blogID, fetchBlogPost]);

    return (
        <div className='blog-post'>
            {/* metadata */}
            <Helmet>
                {blog ? 
                    <title>
                        {blog.blogTitle} | HIPPSC {blog.blogType}
                    </title>
                : "HIPPSC"}
                <meta 
                    name="description" 
                    content="HIPPSC blogs are our home for HIPPSC news and machinery technical tips. 
                             Follow us on Facebook, Linkedin, Instagram, and YouTube!" 
                />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="publisher" content={blog.blogAuthor} />
                <meta name="keywords" content="machinery, shrink fit, tool holders, cnc machining, latest news, blog" />
                <link rel="canonical" href={`https://www.hippsc.com/blog/${blogTitle}`} />

                {/* Facebook tags */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog - HIPPSC Shrink Fit" />
                <meta property="og:description" content="HIPPSC blogs are our home for HIPPSC news and machinery technical tips. 
                                                         Follow us on Facebook, Linkedin, Instagram, and YouTube!" />
                <meta property="og:url" content={`https://www.hippsc.com/blog/${blogTitle}`} />
                <meta property="og:site_name" content="HIPPSC" />
                <meta property="og:image" content={blog.blogImageUrl} />
                <meta property="og:image:type" content="image/png" />
                
                {/* Twitter tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@HIPPSCUSA" />
                <meta name="twitter:card" content='website' />
                <meta name="twitter:title" content='Blog - HIPPSC Shrink Fit' />
                <meta name="twitter:description"  content="HIPPSC blogs are our home for HIPPSC news and machinery technical tips. 
                                                           Follow us on Facebook, Linkedin, Instagram, and YouTube!"  />
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

                {loading ? 
                    <BlogPostSkeleton /> 
                    :
                    <>
                        {/* title */}
                        <h1 className="blog-post-title page-title-1-xl">
                            {blog.blogTitle}
                        </h1>

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
                            <img src={blog.blogImageUrl} alt={blog.blogTitle} title={blog.blogTitle} />
                        </div>


                        {/* section */}
                        <div className="blog-post-section">
                            {blog.blogSection?.map((section, index) => {
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
                    </>
                }
            </div>
        </div>
    );
};

export default BlogPost;