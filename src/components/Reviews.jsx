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
    <ul className="reviews">
      {reviews.map((review) => {
        return (
          <li className="reviews--cards" key={review.review_id}>
            <Link to={`/reviews/${review.review_id}`} key={review.review_id}>
              <h2>{review.title}</h2>
              <img
                className="reviews--image"
                src={review.review_img_url}
                alt={review.title}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
