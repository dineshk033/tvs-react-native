import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: " https://api.rss2json.com/v1/api.json",
});

export default AxiosInstance;
