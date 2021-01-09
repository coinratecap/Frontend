import React from 'react'
import ExchangeHeader from '../Exchanges/exhangesHeader'
export default function recentPosts() {
    let postsList = [
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer", author: "Wisdom Ekpot", time: "27th October,2020" },


    ]
    let popularPosts = postsList.map(post =>
        <div className="col-md-4 my-3">
            <div className="card border-0 shadow-sm" >
                <img src="https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Wisdom Ekpot -  July 19, 2019</h6>

                    <p className="card-text">{post.content}...</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Read More</a>
                </div>

            </div >
        </div>

    )
    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-3">
                        <h4>Recent Posts</h4>
                    </div>
                </div>
                <div className="row">
                    {popularPosts}
                </div>
            </div>
        </section>
    )
}
