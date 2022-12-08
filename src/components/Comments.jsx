import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../util/api";

const Comments = () => {
  const [comments, setComments] = useState({});
  const [loading, setLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getCommentById(review_id).then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, [review_id]);

 return loading ? (
  <p>page is loading...</p>
 ) : (
  <ul className="Comments">
    <h2>Comments</h2>
    {comments.map((comment) => {
      return (
        <li className="comments--single-comment" key={comment.comment_id}>
          <p>{comment.author}: {comment.body}</p>
        </li>
      )
    })}

  </ul>
 )
};

export default Comments;
