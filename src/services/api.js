import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmExMjliMTg5MzQ2MTVlZGJlM2Y4Mzk2ZjA3NTVhOCIsInN1YiI6IjYxNDA4ZDY5NjBjNzUxMDA0MmVlOGJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Ibmb632ljWXfboDCzOTisQEWRdPNQinvuYAiGvdDzo';

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        Authorization: `Bearer ${token}`
    }
})