import axois from "axios";

const api = axois.create({
  baseURL: "https://api.themoviedb.org/3/",
  params : {
    api_key: "0893f8c7df602588a4cbc8304965ecab",
    language: "en-US"
  }
});

export default api;