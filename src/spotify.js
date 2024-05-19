import axios from "axios";


const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "d0cbd6f6defc4a418d298a3816c71ae9";
const redirectUri = "http://localhost:5173/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_doialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/"
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer" + token;
    return config;
  });
};

export default apiClient;