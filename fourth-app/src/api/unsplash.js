import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HvhfGJyYTX0-j4rLfHFHEhKI5ZBGGihd132BTA2EBEY"
  }
});
