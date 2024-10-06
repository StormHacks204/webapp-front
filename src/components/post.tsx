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
        <div className="post">
            <div className="header">
                <img className="profile-picture" src={profilePicture} alt="Profile Picture" />
                <span>{username}</span>
                <span>{title}</span>
            </div>
            <div className="body">
                <img className="post-image" src={image} alt="Content" />
                <p>{caption}</p>
            </div>
        </div>
    );
};
export default Post;
