import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../../components/Post/Post";
import "./PostPage.css";

const PostPage = () => {
  const [currPost, setPost] = useState({});
  const PostsList = useSelector((state) => state.postReducer);
  const currPostId = window.location.pathname.split("/")[3];
  useEffect(() => {
    setPost(PostsList?.data?.filter((p) => p._id === currPostId)[0]);
  }, [PostsList.data, currPostId]);

  if (!currPost) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="post-page">
        <div className="wrapper">
          <Post post={currPost && currPost} key={currPost._id} />
        </div>
      </div>
    );
  }
};

export default PostPage;
