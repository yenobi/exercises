import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }

        this.renderList = this.renderList.bind(this);
        this.toggleComments = this.toggleComments.bind(this);
    }

    static defaultProps = {
        comments: []
    }

    renderList() {
        if (!this.state.isOpen) return null;

        if(!this.props.comments) return <p>No comments yet</p>

        return (
                <ul>
                    {Object.values(this.props.comments)
                        .map(comment => {
                            return <li key={comment.id}><Comment comment={comment} /></li>
                        })}
                </ul> 
        );
    }

    toggleComments() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.toggleComments}>
                    {this.state.isOpen ? 'close' : 'open'} comments
                </button>
                {this.renderList()}
            </div>
           
        );
    }
}

export default CommentList;