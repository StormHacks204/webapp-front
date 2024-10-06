/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
type PostProps = {
    username: string;
    profilePicture: string;
    imageId: string;
    caption: string;
    title: string;
    date: string;
};

const Post: React.FC<PostProps> = ({ username, profilePicture, imageId, caption, title, date }) => {
    return(
        <div className="flex justify-center my-10">
            <div className="border-1 p-4 rounded-lg shadow-md w-[600px] w-[90%] max-w-[600px] bg-white">
                <div className="flex items-center mb-[12px]">
                    <img className="w-[50px] h-[50px] rounded-full mr-[12px]" src={profilePicture} alt="Profile Picture" />
                    <span>{username}</span>
                    
                </div>
                <div className="body">
                    {imageId ? (
                        <>
                            <img className="w-full mt-[16px] mr-[12px]" src={`${import.meta.env.VITE_SERVER_URL}/posts/image/${imageId}`} alt="Content" />
                            <h3 className="my-[8px] text-sm font-semibold">{title}</h3>
                            <p className="text-xs text-[#555]">{caption}</p>
                            <p className="text-xs text-[#888]">{date.split('T')[0]}</p>
                        </>
                    ) : (
                        <>
                            <h3 className="my-[8px] text-sm font-semibold">{title}</h3>
                            <p className="text-xs text-[#555]">{caption}</p>
                            <p className="text-xs text-[#888]">{date.split('T')[0]}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Post;
