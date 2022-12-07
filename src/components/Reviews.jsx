import { useEffect } from "react";
import { useState } from "react";
import { getReviews } from "../util/api";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviews(reviews);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <p>page is loading...</p>
  ) : (
    <ul className="card-grid">
      {reviews.map((review) => {
        return (
          <li className="reviews--card" key={review.review_id}>
            <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
              <h2 className="reviews--title">{review.title}</h2>
            </Link>
            <img
              className="reviews--image"
              src={review.review_img_url}
              alt={review.title}
            />
            <p className="reviews--votes">Likes: {review.votes}</p>
            <p className="reviews--comments">
              Comments: {review.comment_count}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
