import React, { useEffect, useState } from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from '../../data/blog.json'

interface IPost {
        id:string;
        blogCategory:string;
        blogTitle:string;
        postedOn:string;
        author:string;
        blogImage:string;
        blogText:string;
}


const  BlogPost:React.FC= (props) =>  {
    const [post,setPost] = useState<IPost>({
        id:"",
        blogCategory:"",
        blogTitle:"",
        postedOn:"",
        author:"",
        blogImage:"",
        blogText:""
    })
    const [slug,setSlug] = useState<any>("")

    useEffect(()=>{
        const slug:any =props.slug;
        const post:any = blogPost.data.find(post=>post.id == slug)
        setPost(post)
        setSlug(slug)
    },[post,props.params.slug])

    if(post.blogImage = "")return null

    return (
        <div className="blogPostContainer">
            <Card >
            <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
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