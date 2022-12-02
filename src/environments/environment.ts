import { Environment } from "./environment.type";

export const environment: Environment = {
  isLocal: true,
  api: {
    quiz: "https://nest.ndl.thomasgouveia.fr/quiz",
    articles: "https://learning.ndl.thomasgouveia.fr/api/articles",
    articlesRoot: "https://learning.ndl.thomasgouveia.fr",
  },
  token: {
    articles:
      "d039abf8d06aeb6cbcb8062bf481b3c34148ba3882270e2d1c2627e3ad65c12ac91aac3d9d2a57d50575c1fa62724b3ddd173c15fac9ef2e5a4c749245ae6ddc1a228c59064a15bfd03a2079b19defcdf0d781cab9286e27d6fd61e4719bb1501246450a7cc3939f3c7c0b77427d9bb517931b12637298a04ba5d31c4476becd",
  },
  auth: {
    domain: "dev-cmegn43bvk67a63b.eu.auth0.com",
    clientId: "WqKcxb9E5H57IXLGWIsPylds6Hf6nwhr",
    callback: "https://app.ndl.thomasgouveia.fr/auth/callback",
  },
};

// LOCAL
// export const environment: Environment = {
//   isLocal: true,
//   api: {
//     quiz: "http://localhost:3001/quiz",
//     articles: "http://localhost:1337/api/articles",
//     articlesRoot: "http://localhost:1337",
//   },
//   token: {
//     articles:
//       "d039abf8d06aeb6cbcb8062bf481b3c34148ba3882270e2d1c2627e3ad65c12ac91aac3d9d2a57d50575c1fa62724b3ddd173c15fac9ef2e5a4c749245ae6ddc1a228c59064a15bfd03a2079b19defcdf0d781cab9286e27d6fd61e4719bb1501246450a7cc3939f3c7c0b77427d9bb517931b12637298a04ba5d31c4476becd",
//   },
//   auth: {
//     domain: "dev-cmegn43bvk67a63b.eu.auth0.com",
//     clientId: "WqKcxb9E5H57IXLGWIsPylds6Hf6nwhr",
//     callback: "https://app.ndl.thomasgouveia.fr/auth/callback",
//   },
// };
