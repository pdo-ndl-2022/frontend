import { IAuthContext } from "../contexts/Auth.context";
import { Article } from "../types/article.type";
import { ApiName, get } from "./http.service";

export const getArticles = async (auth: IAuthContext): Promise<Article[]> => {
  return get(`?populate=*`, ApiName.ARTICLES, auth);
};

export const getArticleBySlug = async (auth: IAuthContext, slug: string): Promise<Article> => {
  return get(`?populate=*&filters\[slug\][$eq]=${slug}`, ApiName.ARTICLES, auth);
};
