import React from "react";
import PostsList from "../../components/PostsList";
import data from "../../assets/data";

const PostsPage: React.FC = () => {
  return <PostsList data={data} />;
};
export default PostsPage;
