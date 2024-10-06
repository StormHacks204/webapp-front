/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Post from "./post";

const exampleData = [
    {
        username: "username",
        profilePicture: "https://via.placeholder.com/150",
        image: "https://via.placeholder.com/150",
        caption: "caption1",
        title: "title1",
    },
    {
        username: "johndoe",
        profilePicture: "https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg",
        image: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        caption: "caption2",
        title: "title2",
    }
];
// fetch function
const fetchPostsData = async () => {
    try {
        // const response = await fetch("http://localhost:5001/posts");
        // if (response.status === 404) {
        //     window.alert("No Posts Found");
        //     throw new Error("404 Not Found");
        // }
        // if (response.status === 500) {
        //     window.alert("Something went wrong");
        //     throw new Error("500 Internal Server Error");
        //
        // }
        // const data = await response.json();
        // const data = response.json();
        const data = exampleData;
        console.log(data);
        return data;
    } catch (error) {
        console.error("There was a problem with your fetch operation: ", error);
        return [];
    }
};

type PostProps = {
    username: string;
    profilePicture: string;
    image: string;
    caption: string;
    title: string;
};

const PostList = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await fetchPostsData();
                console.log(data);
                setPosts(data);
                console.log(posts);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }

        };
        fetchPosts();
    }, [posts]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="postList">
            {posts.map((post, index) => (
                <Post
                    key={index}
                    username={post.username}
                    profilePicture={post.profilePicture}
                    image={post.image}
                    caption={post.caption}
                    title={post.title}
                />
            ))}
        </div>
    );
};
export default PostList;