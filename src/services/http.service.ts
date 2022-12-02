import { IAuthContext } from "../contexts/Auth.context";
import { environment } from "../environments/environment";

export enum ApiName {
  QUIZ = "quiz",
  ARTICLES = "articles",
}

export interface FetchOption {
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: { [k: string]: string };
}

export const get = async (
  endpoint: string,
  apiName: ApiName,
  authContext: IAuthContext
) => {
  return fetcher(endpoint, { method: "GET" }, apiName, authContext);
};
export const post = async (
  endpoint: string,
  apiName: ApiName,
  authContext: IAuthContext
) => {
  return fetcher(endpoint, { method: "POST" }, apiName, authContext);
};
export const put = async (
  endpoint: string,
  apiName: ApiName,
  authContext: IAuthContext
) => {
  return fetcher(endpoint, { method: "PUT" }, apiName, authContext);
};
export const remove = async (
  endpoint: string,
  apiName: ApiName,
  authContext: IAuthContext
) => {
  return fetcher(endpoint, { method: "DELETE" }, apiName, authContext);
};

const fetcher = async (
  endpoint: string,
  option: FetchOption,
  apiName: ApiName,
  authContext: IAuthContext
) => {
  const headers = buildHeader(option.headers || {}, authContext);
  const apiEndpoint = buildEndpoint(endpoint, apiName);
  const res = await fetch(apiEndpoint, {
    ...option,
    headers,
  });
  return res.json();
};

const buildEndpoint = (endpoint: string, apiName: ApiName) => {
  const apiConfig = environment.api;
  switch (apiName) {
    case ApiName.QUIZ:
      return `${apiConfig.quiz}${endpoint}`;
    case ApiName.ARTICLES:
      return `${apiConfig.articles}${endpoint}`;
  }
};

const buildHeader = (
  headers: { [k: string]: string },
  authContext: IAuthContext
) => {
  const authHeader: any = {};
  if (authContext.idToken) {
    authHeader["X-Id-Token"] = authContext.idToken;
  }
  if (authContext.accessToken) {
    authHeader["Authorization"] = `Bearer ${authContext.accessToken}`;
  }
  if (Object.keys(authHeader).length > 0) {
    return {
      ...headers,
      ...authHeader,
    };
  }
  return headers;
};
