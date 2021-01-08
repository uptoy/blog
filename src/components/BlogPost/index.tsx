import React, { useEffect, useState } from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'

const  BlogPost:React.FC= (props) => {
    const [post,setPost] = useState({
        id:"",
        blogCategory:"",
        blogTitle:"",
        postedOn:"",
        author:"",
        blogImage:"",
        blogText:""
    })
    const [postId,setPostId] = useState('')

    useEffect(()=>{
        const postId =props.match.params.postId;
        const post = blogPost.data.find(post=>post.id == postId)
        setPost(post)
        setPostId(postId)
    },[post,props.match.params.postId])

    return (
        <div className="blogPostContainer">
            <Card >
            <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                <h1 className="postTitle">{post.blog.Title}</h1>
                <span className="postedBy">posted on {props.postedOn} by {post.author}</span>
            </div>
            <div className="postImageContainer">
                <img src={require('../../blogPostImages/' + post.blogImage)} alt='Post Image'/>
            </div>
            <div className="postContent">
                <h3>{post.blogTitle}</h3>
                <p>{post.blogText}</p>
            </div>
            </Card>
        </div>
    )
}

export default BlogPost