import { environment } from "../../environments/environment";

export function getConfig() {
  const authConfig = environment.auth;

  return {
    domain: authConfig.domain,
    clientId: authConfig.clientId,
  };
}
