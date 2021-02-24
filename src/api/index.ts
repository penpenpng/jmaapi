import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.jma.go.jp/bosai/",
});

function api<T>(
  path: string
): (options?: ApiRequestOption) => Promise<AxiosResponse<T>>;
function api<T>(
  path: (code: string) => string
): (code: string, options?: ApiRequestOption) => Promise<AxiosResponse<T>>;

function api<T>(path: string | ((code: string) => string)) {
  const call = <T>(path: string, options: ApiRequestOption | undefined) =>
    axiosInstance.get<T>(path, {
      params: options?.time && {
        __time__: options.time,
      },
      ...options,
    });

  if (typeof path === "string")
    return (options?: ApiRequestOption) => call<T>(path, options);
  return (code: string, options?: ApiRequestOption) =>
    call<T>(path(code), options);
}

export const getArea = api<JmaArea>("/common/const/area.json");

export const getOverview = api<JmaOverview>(
  (officeCode) => `/forecast/data/overview_forecast/${officeCode}.json`
);

export const getWeekOverview = api<JmaWeekOverview>(
  (officeCode) => `/forecast/data/overview_week/${officeCode}.json`
);
