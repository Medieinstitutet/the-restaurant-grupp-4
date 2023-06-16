import React from "react";
import "../BoxesStart/BoxesStart.scss";

const CommentSection = () => {
    const comments = [
        {
            id: 1,
            author: "Vera.B",
            comment: "7 av 5 stjärnor!",
        },
        {
            id: 2,
            author: "Camilla Melkersson",
            comment: "Jag sa ja till min man här, nu äter vi här varje fredag!",
        },
        {
            id: 3,
            author: "Lucas Holm",
            comment: "Bästa maten i staden!!",
        },
        {
            id: 4,
            author: "Melina",
            comment: "Min farmor och jag åt här, kommer definitivt tillbaka!",
        },
    ];

    return (
        <div className="comment-section">
            {comments.map((comment) => (
                <div key={comment.id} className="comment">
                    <div className="author">{comment.author}</div>
                    <div className="comment-text">{comment.comment}</div>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;
