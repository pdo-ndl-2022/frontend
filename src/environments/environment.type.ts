export interface Environment {
  api?: any;
  isLocal: boolean;
  auth: {
    domain: string;
    clientId: string;
  };
}
