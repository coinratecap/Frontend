import React from 'react';
import Blank from '../layouts/Blank'
// import ExchangeHeader from '../components/Exchanges/exhangesHeader';
import Posts from '../components/Blog/posts'
import RecentPosts from '../components/Blog/recentPosts'
function Blog(props) {
    return (
        <Blank>
            <Posts />
            <RecentPosts />
        </Blank>
    );
}

export default Blog;