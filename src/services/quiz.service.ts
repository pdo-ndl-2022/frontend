import { IAuthContext } from "../contexts/Auth.context";
import { ApiName, get, post } from "./http.service";

export const getQcms = async (auth: IAuthContext) => {
  return get("qcms", ApiName.QUIZ, auth);
};

export const getQuestions = async (auth: IAuthContext, category?: string) => {
  const endpoint = category ? `questions?category=${category}` : "questions";
  return get(endpoint, ApiName.QUIZ, auth);
};

export const getRanking = async (auth: IAuthContext) => {
  return get("users", ApiName.QUIZ, auth);
};

export const incrementScore = async (auth: IAuthContext) => {
  return post("users/score", ApiName.QUIZ, auth, {});
};
