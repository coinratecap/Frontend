import React from 'react'
import PopularPost from './popularposts'
import './blog.css'
export default function postDetails() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <img src="https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="blog-post-image my-4" alt="..." />Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sit ornare nulla sed. Elementum, augue laoreet ac sed aenean faucibus maecenas. Tincidunt diam interdum aliquam elementum dui odio. Leo convallis metus elementum sit.

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sit ornare nulla sed. Elementum,
                        augue laoreet ac sed aenean faucibus maecenas.
                        Tincidunt diam interdum aliquam elementum dui odio. Leo convallis metus elementum sit.
                        ac sed aenean faucibus maecenas.
Tincidunt diam interdum aliquam elementum dui odio. Leo convallis metus elementum sit.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sit ornare nulla sed. Elementum,
                        augue laoreet ac sed aenean faucibus maecenas.
                        Tincidunt diam interdum aliquam elementum dui odio. Leo convallis metus elementum sit.
                        ac sed aenean faucibus maecenas.
Tincidunt diam interdum aliquam elementum dui odio. Leo convallis metus elementum sit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sit ornare nulla sed. Elementum,
                        augue laoreet ac sed aenean faucibus maecenas.
                        Tincidunt diam interdum aliquam elementum dui odio. Leo convallis metus elementum sit.
                        ac sed aenean faucibus maecenas.
Tincidunt diam interdum aliquam elementum dui odio. Leo convallis metus elementum sit.</p>
                    </div>
                    <PopularPost />
                </div>
            </div>
        </section>
    )
}
