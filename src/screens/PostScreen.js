import React, { Component } from 'react';

import { Query } from 'react-apollo';

import { getPosts } from '../queries';

import Post from '../components/Post';

class PostScreen extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="alert alert-light"> <h2 className="font-weight-bold" >Post Screen</h2></div>
                <Query
                    query={getPosts}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <div className="alert alert-info"> Loading posts...</div>;
                        if (error) return <div className="alert alert-danger"> Error Graphql ...</div>;

                        return data.posts.map(post => <Post key={post.id} post={post} />);
                    }}
                </Query>
            </React.Fragment>
            
        );
    }
}

export default PostScreen;
