import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";

const getApi = (path: string) => {
  return axios.get(`https://api.escuelajs.co/api/v1/${path}`, {
    headers: {
      accept: "application/json",
    },
  });
};

export const useGetApi = (path: string) => {
  return useQuery({
    queryFn: () => getApi(path),
    queryKey: [path, path],
    enabled: false,
    cacheTime: 1,
    retry: 1,
    onError: (error: AxiosError) => {
      return error;
    },
  });
};
