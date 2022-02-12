import React from "react";
import { useNavigate } from "react-router-dom";

type OnePostPropsType = {
  post: { id: number; header: string; content: string };
};

const OnePost: React.FC<OnePostPropsType> = (props) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const {
    post: { header, content },
  } = props;
  return (
    <div>
      <h1>{header}</h1>
      <pre>{content}</pre>
      <button type="button" onClick={goBack}>
        Назад
      </button>
    </div>
  );
};
export default OnePost;
