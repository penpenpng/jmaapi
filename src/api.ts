import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.jma.go.jp/bosai/",
});

const api = <T>(path: string) => (
  options?: ApiRequestOption
): Promise<AxiosResponse<T>> =>
  axiosInstance.get<T>(path, {
    params: options?.time && {
      __time__: options.time,
    },
    ...options,
  });

export const getArea = api<JmaArea>("/common/const/area.json");
