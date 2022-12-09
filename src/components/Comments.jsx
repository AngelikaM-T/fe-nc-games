import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentById, postComment } from "../util/api";
import CommentForm from "../components/CommentForm";
import { UserContext } from "../context/UserContext";
import ErrorComponent from "../components/ErrorPage";

const Comments = () => {
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { activeUser } = useContext(UserContext);

  const { review_id } = useParams();

  const addComment = (body) => {
    postComment(review_id, body, activeUser.username)
      .then((newComment) => {
        setComments([newComment, ...comments]);
      })
      .catch((err) => {
        setError({ err });
      });
  };

  useEffect(() => {
    setLoading(true);
    getCommentById(review_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [review_id]);

  if (error) {
    <ErrorComponent />;
  }
  return loading ? (
    <p>page is loading...</p>
  ) : (
    <ul className="Comments">
      <h2 className="comment-title">Comments</h2>
      <p className="comment-form-tile">Write Comment</p>
      <CommentForm handleSubmit={addComment} />
      {comments.map((comment) => {
        return (
          <li className="comments--single-comment" key={comment.comment_id}>
            <p>
              {comment.author}: {comment.body}
            </p>
            <p>{comment.created_at}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
