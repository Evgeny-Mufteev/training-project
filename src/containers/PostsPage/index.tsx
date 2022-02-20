import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "../../components/PostsList";
import fakeData from "../../assets/data";
import { fetchPostsDataAction } from "../../store/actions";
import { getPostsData } from "../../store/selectors";

const PostPage: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getPostsData);
  useEffect(() => {
    setTimeout(() => dispatch(fetchPostsDataAction(fakeData)), 2000);
  }, []);
  return <PostsList data={data} />;
};

export default PostPage;
