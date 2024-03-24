import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AWS from 'aws-sdk';

// css
import '../../css/Blog/Blog.css';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetchBlogPosts();
    }, []);

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

            const result = await dynamodb.scan(params).promise();
            setBlogPosts(result.Items);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            console.error('Error stack trace:', error.stack);
        }
    };

    return (
        <div className="blog">
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
                            {post.blogSubtitle}
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