import React from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends React.Component {
    static defaultProps = {
        comments: []
    }

    renderList = () => {
        if (!this.props.isOpen) return null;

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

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.props.toggleOpen}>
                    {this.props.isOpen ? 'close' : 'open'} comments
                </button>
                {this.renderList()}
            </div>
           
        );
    }
}

export default toggleOpen(CommentList);