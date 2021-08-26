import React from "react";

export default function PostsListItem({ post }) {
    return (
        <div
            style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
            }}
        >
            <p>id: {post.id}</p>
            <p>userId: {post.userId}</p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
        </div>
    );
}
