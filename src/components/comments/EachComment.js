import React from 'react';

export function EachComment ({ comment }){
    return (
        <div className="each-prev-comment" key={comment.id}>
            <div className="comment-user">{comment.username}</div>
            <div className="comment-date">{new Date(comment.date).toLocaleDateString()}</div>
            <div className="comment-text">{comment.text}</div>
        </div>
    )
}