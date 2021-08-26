import React from "react";
import PostsListItem from "../postsListItem/PostsListItem";
import usePostsList from "./usePostsList";

const PostsList = () => {
    const { posts } = usePostsList();

    return (
        <div>
            {posts &&
                posts.map((post) => (
                    <PostsListItem key={post.id} post={post} />
                ))}
        </div>
    );
};
export default PostsList;
