export interface Environment {
  api: {
    quiz: string;
    articles: string;
  };
  isLocal: boolean;
  auth: {
    domain: string;
    clientId: string;
  };
}
