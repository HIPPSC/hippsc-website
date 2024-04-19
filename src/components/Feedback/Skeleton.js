import React from 'react';
import Skeleton from 'react-loading-skeleton';

// css
import '../../css/Feedback/Skeleton.css';

export const BlogListSkeleton = () => {
    return (
        <div className='blog-list-skeleton'>
            <div className="blog-list-skeleton-item">
                <Skeleton height={200} />
                <Skeleton height={40} />
                <Skeleton height={20} />
                <Skeleton height={20} width={100} />
            </div>
            <div className="blog-list-skeleton-item">
                <Skeleton height={200} />
                <Skeleton height={40} />
                <Skeleton height={20} />
                <Skeleton height={20} width={100} />
            </div>
            <div className="blog-list-skeleton-item">
                <Skeleton height={200} />
                <Skeleton height={40} />
                <Skeleton height={20} />
                <Skeleton height={20} width={100} />
            </div>
        </div>
    );
};

export const BlogPostSkeleton = () => {
    return (
        <div className='blog-post-skeleton'>
            <Skeleton height={50} className='blog-post-skeleton-item'/>
            <Skeleton height={20} className='blog-post-skeleton-item'/>
            <Skeleton height={300} className='blog-post-skeleton-item'/>
            <Skeleton height={20} count={3} className='blog-post-skeleton-item'/>
            <Skeleton height={40} width={500} className='blog-post-skeleton-item'/>
            <Skeleton height={20} width={400} className='blog-post-skeleton-item'/>
        </div>
    );
}