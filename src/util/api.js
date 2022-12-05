import axios from "axios";

const gamesApi = axios.create({
  baseURL: 'https://magnificent-hare-sheath-dress.cyclic.app/api',
});

export const getReviews = () => {
  return gamesApi
  .get('/reviews').then(({data}) => {
    return data
  });
};


