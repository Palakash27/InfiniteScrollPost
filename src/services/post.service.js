import { Post } from "../constants/misc";
import restClient from "../utils/restClient";

export const getPosts = async (pageStart) => {
    const posts = await restClient.get(`${Post}?_start=${pageStart}&_limit=10`);
    return posts;
};
