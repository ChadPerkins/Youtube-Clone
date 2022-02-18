import React from "react";

const Comment = props => {
    return(
        <div className="ui comments">
            <div className="ui dividing header">Comments</div>
            <div className="comment">
                <a className="avatar">
                    <img 
                        src={props.comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                        alt="Profile"
                    />
                </a>
                <div className="content">
                    <a className="author" href={props.comment.snippet.topLevelComment.snippet.authorDisplayName}>{props.comment.snippet.topLevelComment.snippet.authorDisplayName}</a>
                    <div className="metadata">
                        <span className="date">{props.comment.snippet.topLevelComment.snippet.publishedAt}</span>
                    </div>
                    <div className="text">
                        {props.comment.snippet.topLevelComment.snippet.textOriginal}
                    </div>
                    <div className="actions">
                        {/* <a className="reply">Reply</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Comment;