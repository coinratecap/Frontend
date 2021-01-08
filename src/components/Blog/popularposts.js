import React from 'react'

export default function popularposts() {
    let postsList = [
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },
        { title: "The New Boston Coin", content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" },

    ]
    let popularPosts = postsList.slice(0, 2).map(post =>

        <div className="card my-3 shadow" style={{ width: "auto" }}>
            <img src="https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a className="card-text"><small className="text-muted">Last updated 3 mins ago</small></a>
            </div>
        </div>
    )
    return (
        <div className="col-md-4 my-4">
            <div className="card shadow border-0" >
                <div className="card-body">
                    <h4 className="text-center mb-3">Popular Posts</h4>
                    {popularPosts}
                </div>
            </div>

        </div>
    )
}
