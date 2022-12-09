import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById, patchVotes } from "../util/api";
import Comments from "../components/Comments";

const Review = () => {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
      setLoading(false);
      setVotes(review.votes);
    });
  }, [review_id]);

  const handleVote = () => {
    if (votes <= 0) {
      setVotes(0);
    }
    setVotes((currCount) => currCount + 1);
    setErr(null);
    patchVotes(review_id).catch((err) => {
      setVotes((currCount) => {
        return currCount - 1;
      });
      setErr("Something went wrong, please try again.");
    });
  };

  if (!loading) {
    if (err) return <p>{err}</p>;
    return (
      <main className="review--page">
        <h2 className="review--title">{review.title}</h2>
        <p>Category: {review.category}</p>

        <img
          className="review--image"
          src={review.review_img_url}
          alt={review.title}
        />

        <div className="review--likes">
          <button id="vote-up" onClick={handleVote}>
            Likes: {votes} 👍
          </button>
        </div>

        <p className="review--designer">Designer: {review.designer}</p>
        <p className="review--owner">Owner: {review.owner}</p>
        <p className="review--reviews">Review: {review.review_body}</p>
        <Comments user_id="1"/>
      </main>
    );
  } else {
    return <h2>Page is loading...</h2>;
  }
};

export default Review;
