import React from 'react';
import Blank from '../layouts/Blank'
import ExchangeHeader from '../components/Exchanges/exhangesHeader';
import Posts from '../components/Blog/posts'
function Blog(props) {
    return (
        <Blank>
            <ExchangeHeader title="Cryptocurrency Blog Posts" />
            <Posts />
        </Blank>
    );
}

export default Blog;