import React, { Component } from 'react';

import { Query } from 'react-apollo';

import { getPosts } from '../queries';

import Post from '../components/Post';

class PostScreen extends Component {
    render() {
        return (
            <Query
                query={getPosts}
            >
                {({ loading, error, data }) => {
                    if (loading) return <div className="alert alert-success"> Loading posts...</div>;
                    if (error) return <p>Error : {error}</p>;

                    return (
                        data.posts.map(post => <Post key={post.id} post={post} />)
                    );
                }}
            </Query>
        );
    }
}

export default PostScreen;
