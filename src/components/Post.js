import React from 'react';
import { Mutation } from 'react-apollo';

import { upVoteMutation } from '../queries';

import Comments from './Comments';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
    }

    upVote(event) {
        console.log(this.props);
    }

    render() {
        const { post: { id, title, votes, author, comments } } = this.props;

        return (
            <div className="card card-block border-light bg-light mb-3">
                <div className="card-header d-flex justify-content-between">
                    <p className="card-text">{title}</p>
                    <p className="card-text font-italic">{author.firstName} {author.lastName}</p>
                </div>
                <div className="card-body d-flex align-items-center">
                    <p className="mr-3">
                        <i className="fas fa-user-circle fa-5x" />
                    </p>
                    <p className="card-text text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>

                <div className="card-footer bg-transparent">
                    <ul className="d-flex justify-content-end p-2 list-inline list-unstyled">
                        <li>
                            <Mutation mutation={upVoteMutation} variables={{ postId: id }}>
                                {(upvotePost) => {
                                    return (
                                        <span onClick={upvotePost}>
                                            <i className="far fa-check-circle" /> {votes} Votes
                                        </span>
                                    );
                                }}
                            </Mutation>
                        </li>
                        <li className="px-2">|</li>
                        <li>
                            <span>
                                <i className="far fa-comments" /> {comments.length || 0} comments
                            </span>
                        </li>
                    </ul>
                    <Comments comments={comments} postId={id} />
                </div>
                
            </div>
        );
    }
}

export default Post;
