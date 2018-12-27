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

// export default compose(
//   firebaseConnect([
//     'posts' // { path: '/todos' } // object notation
//   ]),
//   connect((state) => ({
//     posts: state.firebase.data.posts,
//     // profile: state.firebase.profile // load profile
//   }))
// )(BlogList)

export default BlogList
