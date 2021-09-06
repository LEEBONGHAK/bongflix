import axois from "axios";

// call api
const api = axois.create({
  baseURL: "https://api.themoviedb.org/3/",
  params : {
    api_key: "0893f8c7df602588a4cbc8304965ecab",
    language: "en-US"
  }
});

// movie datas in api
export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id => api.get(`movie/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term => api.get("search/tv", {
    params: {
      query: term
    }
  })
}

// tv show datas in api
export const TVApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: id => api.get(`tv/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  search: term => api.get("search/movie", {
    params: {
      query: term
    }
  })
}