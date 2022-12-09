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

export const patchVotes = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then(({ data }) => {
      return data.review.votes;
    });
};

export const getUsers = () => {
  return gamesApi.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const postComment = (review_id, body, username) => {
  const postBody = {
    username: "tickle122",
    body: body,
  };
  return gamesApi
    .post(`/reviews/${review_id}/comments`, postBody)
    .then(({ data }) => {
      return data.comment
    });
};

export const getReviewsByCategory = (category) => {
  return gamesApi.get(`/reviews?category=${category}`).then(({data}) => {
    return data
  })
}