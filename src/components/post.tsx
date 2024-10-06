// import React from "react";
type PostProps = {
    username: string;
    profilePicture: string;
    image: string;
    caption: string;
    title: string;
};

const Post: React.FC<PostProps> = ({ username, profilePicture, image, caption, title }) => {
    return(
        <div className="flex justify-center my-8">
            <div className="border-1 p-4 rounded-s-lg shadow-md min-w-[599px] max-w-[600px] bg-white">
                <div className="flex items-center mb-[12px]">
                    <img className="w-[50px] h-[50px] rounded-full mr-[12px]" src={profilePicture} alt="Profile Picture" />
                    <span>{username}</span>
                    
                </div>
                <div className="body">
                    <img className="w-full mt-[16px] mr-[12px]" src={image} alt="Content" />
                    <h3 className="my-[8px] text-sm font-semibold">{title}</h3>
                    <p className="text-xs text-[#555]">{caption}</p>
                </div>
            </div>
        </div>
    );
};
export default Post;
