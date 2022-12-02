import { Environment } from "./environment.type";

export const environment: Environment = {
  isLocal: true,
  api: {
    quiz: "http://localhost:3001/quiz",
    articles: "http://localhost:3002/articles",
  },
  auth: {
    domain: "dev-cmegn43bvk67a63b.eu.auth0.com",
    clientId: "WqKcxb9E5H57IXLGWIsPylds6Hf6nwhr",
  },
};
