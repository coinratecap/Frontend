import React from 'react';
import Blank from '../layouts/Blank'
import ExchangeHeader from '../components/Exchanges/exhangesHeader';
import PostDetails from '../components/Blog/postDetails'
function BlogDetails(props) {
    return (
        <Blank>
            <ExchangeHeader title="Cryptocurrency Blog Posts" />
            <PostDetails />
        </Blank>
    );
}

export default BlogDetails;