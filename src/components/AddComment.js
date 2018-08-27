import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { addPostCommentMutation } from '../queries';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onChange_SetText = this.onChange_SetText.bind(this);
    }
    
    onChange_SetText({target: {value}}) {
        this.setState({text: value});
    }

    render() {
        const { postId } = this.props;
        const {text} = this.state;

        return (
            <Mutation mutation={addPostCommentMutation}>
                {(addCommentPost) => {
                    return (
                        <React.Fragment>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="2" onChange={this.onChange_SetText} value={text} />
                            </div>
                            <div className="form-group clearfix">
                                <button
                                    type="submit"
                                    className="btn btn-primary float-right"
                                    onClick={() => {
                                        addCommentPost({ variables: { postId, text } });
                                    }}
                                >
                                    Add Comment
                                </button>
                            </div>
                        </React.Fragment>
                    );
                }}
            </Mutation>
        );
    }
}

export default AddComment;
