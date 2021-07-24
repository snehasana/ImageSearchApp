import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID w2dl0UecqeAGDEQL2QyqIt7r1uanjVyG-gthapc9RWc",
  },
});
