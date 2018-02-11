import React from 'react';

class Comment extends React.PureComponent {
    render() {
        const {comment} = this.props;
        return (
           <div>
               <p>{comment.text}</p>
               <p>
                   <strong>{comment.user}</strong>
               </p>
           </div> 
        );
    }
}

export default Comment;