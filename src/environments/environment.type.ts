export interface Environment {
  api: {
    quiz: string;
    articles: string;
    articlesRoot: string;
  };
  token: {
    articles: string;
  };
  isLocal: boolean;
  auth: {
    domain: string;
    clientId: string;
    callback: string;
  };
}
