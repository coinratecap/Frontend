import React from 'react';
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
let blogposts = postsList.map(post =>
    <div className="card mb-3 shadow-sm border-0" style={{ maxWidth: "auto" }}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src="https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
)
let popularPosts = postsList.slice(0, 3).map(post =>

    <div className="card my-3" style={{ width: "auto" }}>
        <img src="https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
)

function posts() {
    return (
        <section>
            <div className="container-fluid">
                <div className="row my-5">
                    <div className="col-md-8">
                        <div className="row" >
                            <div className="col-md-12">
                                {blogposts}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow border-0" >
                            <div className="card-body">
                                <h4 className="text-center mb-3">Popular Posts</h4>
                                {popularPosts}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default posts;