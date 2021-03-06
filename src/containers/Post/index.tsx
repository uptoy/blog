import React from 'react'
import BlogPost from '../../components/BlogPost'
import Sidebar from '../../components/Sidebar'

const Post:React.FC = (props)=>{
    return (
        <section className="container">
            <BlogPost {...props}/>
            <Sidebar {...props}/>
        </section>
    )
}

export default Post