import React from 'react';

import AddComment from './AddComment';

class Comment extends React.Component {
    render() {
        const { comments, postId } = this.props;

        return (
            <div className="w-75 float-right">
                <AddComment postId={postId} />
                {comments.map(({ id, text }) => (
                    <div key={id} className="card bg-light p-2 mb-3">
                        <p className="card-text">{text}</p>
                    </div>
                ))}
                
            </div>
        );
    }
}

export default Comment;
