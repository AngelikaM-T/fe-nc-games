import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviewById } from "../util/api";

const Review = () => {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
      setLoading(false);
    });
  }, [review_id]);

  if (!loading) {
    return (
      <main className="review--page">
        <h2 className="review--title">{review.title}</h2>
        <p>Category: {review.category}</p>
        <img
          className="review--image"
          src={review.review_img_url}
          alt={review.title}
        />
        <p className="review--votes">Votes = {review.votes}</p>
        <p className="review--designer">Designer: {review.designer}</p>
        <p className="review--owner">Owner: {review.owner}</p>
        <p className="review--reviews">Review: {review.review_body}</p>
      </main>
    );
  } else {
    return <h2>Page is loading...</h2>;
  }
};

export default Review;
