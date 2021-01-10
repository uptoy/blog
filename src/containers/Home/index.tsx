import React from 'react'
import './style.css'
import Card from '../../components/UI/Card'
import SideBar from '../../components/Sidebar'
import RecentPosts from './RecentPosts'
import Layout from '../../components/Layout/'
import blogData from '../../data/blog.json'

const SideImage:React.FC = (props:any) => {
    return (
        <div style={{height:`${props.height}px`}}>
            <img src={props.src} alt ="" />
        </div>
    )
}

const ImageGallery:React.FC = props => (
        <div className="galleryPost" style={props.galleryStyle}>
                <section style={{ width: props.largeWidth }}>
                    <div className="mainImageWrapper">
                        <img src={require('../../blogPostImages/' + props.imagesArray[2])} alt="" />
                    </div>
                </section>
                <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                    {
                        props.imagesArray.map(image =>
                            <SideImage
                                height={props.sideImageHeight}
                                src={require('../../blogPostImages/' + image)}
                                alt="" />
                        )
                    }
                </section>
        </div>
);

const Home:React.FC = props => {
    const galleryHeight = 450;
    const galleyStyle ={
        height:galleryHeight+'px',
        overflow:'hidden'
    }

    const sideImageHeight = galleryHeight /3;
    const imgAr = blogData.data.map(post => post.blogImage)
    return(
        <div>
            <Card>
                <ImageGallery
                    largeWidth="70%"
                    smallWidth="30%"
                    sideImageHeight={sideImageHeight}
                    galleryStyle={galleyStyle}
                    imagesArray={imgAr}
                />
            </Card>
            <Layout>
                <RecentPosts style={{width:'70%'}} />
            </Layout>
        </div>
    )
}

export default Home