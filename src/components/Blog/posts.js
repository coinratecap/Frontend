import React from 'react';
import PopularPost from './recentPosts'

let postsList = [
    { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020", img: "https://images.pexels.com/photos/4025825/pexels-photo-4025825.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020", img: "https://images.pexels.com/photos/6120166/pexels-photo-6120166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020", img: "https://images.pexels.com/photos/6120205/pexels-photo-6120205.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020", img: "https://images.pexels.com/photos/6266299/pexels-photo-6266299.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },
    { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020", img: "https://images.pexels.com/photos/6266301/pexels-photo-6266301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020", img: "https://images.pexels.com/photos/6266307/pexels-photo-6266307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020", img: "https://images.pexels.com/photos/5583958/pexels-photo-5583958.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" },


]
let hrefLink = '/blog-details/';
let blogposts = postsList.slice(0, 6).map((post, index) =>
    <div className="card--item" >
        <img className="card-image" src={post.img} />
        <div className="text-block">
            <h4>{post.title}</h4>
            <p className="location">
                {post.author}
            </p>
        </div>
    </div>
)


function posts() {
    return (
        <section id="container" className="my-5">
            <div className="card-list">
                {blogposts}
            </div>
        </section>
    )
}

export default posts;