import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import AWS from 'aws-sdk';

// css
import '../../css/Blog/Blog.css';

// Skeleton
import { BlogListSkeleton } from '../../components/Feedback/Skeleton';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    // fetch blog posts =====================================================
    const fetchBlogPosts = async () => {
        setLoading(true);
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
            setLoading(false);
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            console.error('Error stack trace:', error.stack);
        }
    };

    // trim subtitle =====================================================
    const trimSubtitle = (subtitle) => {
        if (subtitle.length > 80) {
          return `${subtitle.slice(0, 80)} ...`;
        }
        return subtitle;
    };

    // slugify ============================================================
    function slugify(text) {
        return text.toString().toLowerCase()
          .replace(/\s+/g, '-')          // Replace spaces with -
          .replace(/[^\w-]+/g, '')       // Remove all non-word chars, hyphen does not need escaping here
          .replace(/--+/g, '-')          // Replace multiple - with single -, hyphen does not need escaping
          .replace(/^-+/, '')            // Trim - from start of text, hyphen does not need escaping
          .replace(/-+$/, '');           // Trim - from end of text, hyphen does not need escaping
    }

    return (
        <div className="blog">
            {/* metadata */}
            <Helmet>
                <title>Blog - HIPPSC Shrink Fit</title>
                <meta 
                    name="description" 
                    content="HIPPSC blogs are our home for HIPPSC news and machinery technical tips. 
                             Follow us on Facebook, Linkedin, Instagram, and YouTube!" 
                />
                <meta name="keywords" content="machinery, shrink fit, tool holders, cnc machining, latest news, blog" />
                <meta name="publisher" content="HIPPSC Team" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href="https://www.hippsc.com/blog" />

                 {/* schema */}
                 <script type="application/ld+json">
                    {/* {JSON.stringify(f15iSchema)} */}
                </script>

                {/* Facebook tags */}
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog - HIPPSC Shrink Fit" />
                <meta property="og:description" content="HIPPSC blogs are our home for HIPPSC news and machinery technical tips. 
                                                         Follow us on Facebook, Linkedin, Instagram, and YouTube!" />
                <meta property="og:url" content="https://www.hippsc.com/blog" />
                <meta property="og:site_name" content="HIPPSC" />
                
                {/* Twitter tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@HIPPSCUSA" />
                <meta name="twitter:card" content='website' />
                <meta name="twitter:title" content='Blog - HIPPSC Shrink Fit' />
                <meta name="twitter:description"  content="Find high-quality shrink machine for your CNC machine shops. Achieve unparalleled precision and efficiency with our shrink fit products."  />
            </Helmet>


            <h1 className="blog-title page-title-1-xxl">
                Blog
            </h1>

            {loading ? 
                <BlogListSkeleton /> 
                : 
                <div className="blog-post-list">
                    {blogPosts.map((post) => (
                        <Link key={post.blogID}
                            to={ `/blog/${slugify(post.blogTitle)}/${post.blogID}`}
                            className="blog-post-item">
                            <div className="blog-post-item-thumbnail">
                                <img src={post.blogImageUrl} alt={post.blogTitle} title={post.blogTitle}/>
                            </div>
                            <h2 className='blog-post-item-title page-title-3'>
                                {post.blogTitle}
                            </h2>
                            <h3 className='blog-post-item-content'>
                                {trimSubtitle(post.blogSubtitle)}
                            </h3>
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
            }
        </div>
    );
};

export default Blog;