import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import AWS from 'aws-sdk';

// css
import '../../css/Blog/Blog.css';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    // fetch blog posts
    const fetchBlogPosts = async () => {
        try {
            AWS.config.update({
                apiVersion: 'latest',
                region: process.env.REACT_APP_AWS_REGION,
                accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
            });
            const dynamodb = new AWS.DynamoDB.DocumentClient();
            const params = {
                TableName: "hippsc-blog",
            };

            // Fetch all blog posts
            const result = await dynamodb.scan(params).promise();

            // Sort the blog posts based on blogDatetime
            const sortedPosts = result.Items.sort((a, b) => {
                return new Date(b.blogDatetime) - new Date(a.blogDatetime);
            });
            
            setBlogPosts(sortedPosts);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            console.error('Error stack trace:', error.stack);
        }
    };

    // trim subtitle
    const trimSubtitle = (subtitle) => {
        if (subtitle.length > 90) {
          return `${subtitle.slice(0, 90)} ...`;
        }
        return subtitle;
    };

    return (
        <div className="blog">
            {/* metadata */}
            <Helmet>
                <title>Blog - HIPPSC</title>
                <meta 
                    name="description" 
                    content="Welcome to HIPPSC's blog page, your gateway to 
                    the world of precision engineering, cutting-edge technology, and manufacturing 
                    excellence." 
                />
                <meta name="keywords" content="machinery, shrink fit, tool holders, cnc machining, latest news, blog" />
                <link rel="canonical" href="https://www.hippsc.com/blog" />
            </Helmet>


            <div className="blog-title page-title-1-xxl">
                Blog
            </div>
            <div className="blog-post-list">
                {blogPosts.map((post) => (
                    <Link key={post.blogID} 
                        to={`/blog/${post.blogID}`}
                        className="blog-post-item">
                        <div className="blog-post-item-thumbnail">
                            <img src={post.blogImageUrl} alt="blog-thumbnail" />
                        </div>
                        <div className='blog-post-item-title page-title-1'>
                            {post.blogTitle}
                        </div>
                        <div className='blog-post-item-content'>
                            {trimSubtitle(post.blogSubtitle)}
                        </div>
                        <div className="blog-post-item-footer">
                            <div className="blog-post-item-type">
                                {post.blogType}
                            </div>
                            <div className="divider">
                                | 
                            </div>
                            <div className='blog-post-item-date'>
                                {post.blogDatetime}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;