import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    searchURL: "https://omdbapi.com/?apikey=4c8dd7ce&t="
})

export default instance;