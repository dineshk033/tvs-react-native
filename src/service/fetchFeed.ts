import AxiosInstance from "./axiosInstance";

export const fetchFeed = async (url, query) => {
  return await AxiosInstance.get(url, {
    params: query,
  });
};
