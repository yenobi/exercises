import React from 'react';
import PropTypes from 'prop-types';

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    })
}

export default function Comment ({comment}) {
    return (
        <div>
            <p>{comment.text}</p>
            <p>
                <strong>{comment.user}</strong>
            </p>
        </div> 
    );
}

