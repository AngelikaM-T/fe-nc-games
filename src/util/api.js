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

export const getCommentById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchVotes = (article_id) => {
  return gamesApi.patch(`/reviews/${article_id}`, { inc_votes: 1 }).then(({data}) => {
      return data.review.votes
    });
};

export const getUsers = () => {
  return gamesApi.get("/users").then(({data}) => {
  return data.users
})
}
