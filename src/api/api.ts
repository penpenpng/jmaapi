import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.jma.go.jp/bosai/",
});

function api<T>(path: string): (options?: ApiRequestOption) => Promise<T>;
function api<T>(
  path: (code: string) => string
): (code: string, options?: ApiRequestOption) => Promise<T>;

function api<T>(path: string | ((code: string) => string)) {
  const call = async <T>(
    path: string,
    options: ApiRequestOption | undefined
  ) => {
    const response = await axiosInstance.get<T>(path, {
      params: options?.time && {
        __time__: options.time,
      },
      ...options,
    });

    return response.data;
  };

  if (typeof path === "string")
    return (options?: ApiRequestOption) => call<T>(path, options);
  return (code: string, options?: ApiRequestOption) =>
    call<T>(path(code), options);
}

export const getArea = api<JmaArea>("/common/const/area.json");

export const getOverview = api<JmaOverview>(
  (code) => `/forecast/data/overview_forecast/${code}.json`
);

export const getWeekOverview = api<JmaWeekOverview>(
  (code) => `/forecast/data/overview_week/${code}.json`
);
