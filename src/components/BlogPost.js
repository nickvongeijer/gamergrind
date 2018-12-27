import React from 'react'

const BlogPost = ({ post }) => {
    console.log('blogpost)')
    return (
        //let DataList = data.map((val, i) => {
        <div className="blog-item" key={post.id}>
        <div className="blog-block">
            <div className="blog-box">
                <div className="overflow-hidden"><a href={post.link}><img src={`assets/images/blog/${post.photo}`} alt="" /></a></div>
            </div>
        </div>
        <div className="blog-text">
            <h6>{post.date}</h6>
            <a href={post.link}>
                <h3>{post.title}</h3>
            </a>
            <h5>posted by {post.username}, {post.hits} hits, {post.comments} comment</h5>
        </div>
        </div>
    )
}

export default BlogPost