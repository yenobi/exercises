import React from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';

function CommentList({isOpen, comments = [], toggleOpen}) {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'} comments
                </button>
                {/* {this.renderList()} */}
                {renderList(isOpen, comments)}
            </div>
           
        );
}

function renderList(isOpen, comments) {
    if (!isOpen) return null;

    if(!comments) return <p>No comments yet</p>

    return (
            <ul>
                {Object.values(comments)
                    .map(comment => {
                        return <li key={comment.id}><Comment comment={comment} /></li>
                    })}
            </ul> 
        );
}

export default toggleOpen(CommentList);