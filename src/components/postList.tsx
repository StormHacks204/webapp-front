/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Post from "./post";
import { useAuth } from "@clerk/clerk-react";

// const exampleData = [
//     {
//         username: "test",
//         profilePicture: "https://via.placeholder.com/150",
//         image: null,
//         caption: "random caption",
//         title: "Random Title",
//     },
//     {
//         username: "username",
//         profilePicture: "https://via.placeholder.com/150",
//         image: "https://via.placeholder.com/150",
//         caption: "caption1",
//         title: "title1",
//     },
//     {
//         username: "johndoe",
//         profilePicture: "https://static.vecteezy.com/system/resources/previews/009/273/280/non_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg",
//         image: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
//         caption: "caption2",
//         title: "title2",

//     }
// ];
// fetch function


type PostProps = {
    username: string;
    profilePicture: string;
    imageId: string;
    text: string;
    title: string;
    date: string;
};

const PostList = ({latitude, longitude}:{
    latitude: number,
    longitude: number
}) => {
    const {getToken} = useAuth();
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>(undefined);
    const [noPosts, setNoPosts] = useState(false);

    // const fetchPostsData = async () => {
    //     const token = await getToken()

    //     try {
    //         const response = await fetch("http://localhost:5001/posts", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         if (response.status === 404) {
    //             window.alert("No Posts Found");
    //             throw new Error("404 Not Found");
    //         }
    //         if (response.status === 500) {
    //             window.alert("Something went wrong");
    //             throw new Error("500 Internal Server Error");
            
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //         return data;
    //     } catch (error) {
    //         console.error("There was a problem with your fetch operation: ", error);
    //         return [];
    //     }
    // };

    useEffect(() => {
        const fetchPosts = async () => {
            const token = await getToken();
            try {
                const x = latitude;
                const y = longitude; 
                console.log(x, y);
                const response = await fetch(`http://localhost:5001/posts?x=${x}&y=${y}`, {headers: {
                                    Authorization: `${token}`}});
                const data = await response.json();
                if(response.status === 404){
                    window.alert("No Posts Found");
                    throw new Error("404 Not Found");
                }
                if(response.status === 500){
                    window.alert("Something went wrong");
                    throw new Error("500 Internal Server Error");
                }
                if(data.length === 0){
                    setNoPosts(true);
                    throw new Error("No Posts Found");
                }
                console.log(data);
                setPosts(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }

        };
        fetchPosts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="postList py-4">
            {posts && posts.map((post, index) => (
                <Post
                    key={index}
                    username={post.username}
                    profilePicture={post.profilePicture}
                    imageId={post.imageId}
                    caption={post.text}
                    title={post.title}
                    date={post.date}
                /> 
            ))}

            { noPosts ? 
             <div className="flex justify-center my-10">
             <div className="border-1 p-4 rounded-lg shadow-md sm:w-[600px] w-[90%] max-w-[600px] bg-white">

                 <div className="body">
                    <h3 className="my-[8px] text-sm font-semibold">No Posts Found</h3>
                   </div>
             </div>
         </div>
          : null }

            <button onClick={async () => {
                const token = await getToken();
                const x = latitude;
                const y = longitude;
                const response = await fetch(`http://localhost:5001/posts?x=${x}&y=${y}`, {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setPosts(posts.concat(data));
            }}>
                Load More
            </button>
        </div>
    );
};
export default PostList;