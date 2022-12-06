import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://magnificent-hare-sheath-dress.cyclic.app/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then(({ data }) => {
    return data;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};
