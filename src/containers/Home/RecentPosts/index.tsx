import React from 'react'
import './style.css'
import Card from '../../../components/UI/Card'
import Sidebar from '../../../components/SideBar'

const RecentPosts:React.FC = (props:any) => {
    return (
        <div style={{width:'70%'}}>
            <Card style={{marginBottom:'20px'}}>
                <div className="postImageWrapper">
                    <img src={"#"} />
                </div>
                <div style={{textAlign:'center'}}>
                    <span>aaa</span>
                    <h2>aaaa</h2>
                    <span>aaaa</span>
                    <p>aaaa</p>

                    <button>read more</button>
                </div>
            </Card>
            <section className="HomeContainer">
                <RecentPosts />
                <Sidebar />
            </section>
        </div>
    )
}

export default RecentPosts