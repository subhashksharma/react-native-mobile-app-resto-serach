import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Tef--1uJ2IOeGwwh9NJl7WgBpYqEvlLefjuiDXBunvViwsuJNoGUhorbBJm_IvGTt9iLZxK72YqaMkurzP8JnMmiM0l-t-ycwisaqhJwuSPvejBwoXXjGaJR27YhX3Yx",
  },
});
