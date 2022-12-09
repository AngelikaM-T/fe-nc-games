import { useState } from "react";

const CommentForm = ({ handleSubmit }) => {
  const [postBody, setPostBody] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(postBody)
    setPostBody("")
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea className="coment-form-textarea" value={postBody} onChange={(event) => {setPostBody(event.target.value) }}
      />
      <button className="comment-form-button">Comment</button>
    </form>
  );
};

export default CommentForm;