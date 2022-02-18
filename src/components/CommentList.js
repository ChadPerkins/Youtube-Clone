import React from "react";

import Comment from "./Comment";
const CommentList = props => {
    if(props.comments.length){
        const listOfComments = props.comments.map(comment => {
            return (
                <Comment
                    key={comment.id}
                    comment={comment}
                />
            );
        })
        return(
            <>
                <h2>Comments:</h2>
                <div>{listOfComments}</div>
            </>
        )
    }else {
        return <p>No Comments.</p>
    }
}

export default CommentList;