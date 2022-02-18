import React from "react";

import Comment from "./Comment";

const CommentList = props => {
    const listOfComments = props.comments.map(comment => {
        return (
            <Comment
                key={comment.id}
                comment={comment}
            />
        );
    });
    return(
        <>
            <h2>Comments:</h2>
            <div>{listOfComments}</div>
        </>
    )
};

export default CommentList;