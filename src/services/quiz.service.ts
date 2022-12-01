import { IAuthContext } from "../contexts/Auth.context";
import { ApiName, get } from "./http.service";

const endpoint = "/quiz";

export const getQuiz = async (auth: IAuthContext) => {
  get(``, ApiName.QUIZ, auth);
};