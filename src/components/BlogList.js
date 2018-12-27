import React from 'react'
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => {
    console.log('bloglist')
    return (
        
        // blog list sectiom
        <div>    
            { posts && posts.map(post => {
                return (
                    
                    <BlogPost post={post} key={post.id} />
                )
            })}
        </div>
    )
}

export default BlogList