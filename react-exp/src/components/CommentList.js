import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }

        this.renderList = this.renderList.bind(this);
        this.renderComment = this.renderComment.bind(this);
        this.toggleComments = this.toggleComments.bind(this);
    }

    renderList() {
        return (
                <ul>
                    {Object.values(this.props.comments).map(this.renderComment)}
                </ul> 
        );
    }

    renderComment(comment) {
        return (
            <li key={comment.id}>
                <Comment comment={comment} />
            </li>
        )
    }

    toggleComments() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const list = this.state.isOpen ? this.renderList() : ''; 
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.toggleComments}>
                    {this.state.isOpen ? 'close' : 'open'} comments
                </button>
                {list}
            </div>
           
        );
    }
}

export default CommentList;