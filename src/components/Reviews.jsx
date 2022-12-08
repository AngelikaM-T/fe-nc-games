import React, { useEffect, useState } from "react";
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
    <ul className="card-container">
      {reviews.map((review) => {
        return (
          <Link to={`/reviews/${review.review_id}`} key={review.review_id} style={{ textDecoration: 'none' }}>
            <li className="reviews--card" key={review.review_id}>
              <h2 className="reviews--title">{review.title}</h2>

              <img
                className="reviews--image"
                src={review.review_img_url}
                alt={review.title}
              />
              <p className="reviews--likes-comments">👍 {review.votes} | 💬 {review.comment_count}</p>
              
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Reviews;
