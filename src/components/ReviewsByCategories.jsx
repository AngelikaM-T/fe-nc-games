import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviewsByCategory } from "../util/api";

function ReviewsByCategories() {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    getReviewsByCategory(category).then((reviews) => {
      setReviews(reviews)
      setLoading(false)
    });
  }, [category]);

  return loading ? (
    <p>page is loading...</p>
  ) : (
    <ul className="card-container">
      <h1 className="category--title">Games: {category}</h1>
      {reviews.map((review) => {
        return (
          <Link to={`/reviews/${review.review_id}`} key={review.review_id} style={{ textDecoration: 'none' }}>
            <li className="category-reviews--card" key={review.review_id}>
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
  )


}

export default ReviewsByCategories;
