import { useEffect, useState } from "react";
import { getPosts } from "../../services/post.service";

const usePostsList = () => {
    const [posts, setPosts] = useState([]);
    const [pageStart, setPageStart] = useState(0);

    useEffect(() => {
        getPosts(pageStart).then((posts) =>
            setPosts((prevPosts) => prevPosts.concat(posts))
        );
    }, [pageStart]);

    useEffect(() => {
        const scrollListener = () => {
            if (
                window.scrollY + window.innerHeight >=
                document.documentElement.scrollHeight - 100
            ) {
                setPageStart((prevState) => prevState + 10);
            }
        };

        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    return { posts };
};
export default usePostsList;
