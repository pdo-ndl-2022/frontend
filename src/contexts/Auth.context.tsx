import { useAuth0 } from "@auth0/auth0-react";
import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

// The definition of the sidebar context
export interface IAuthContext {
  accessToken: string | null;
  idToken: string | null;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently({
        detailedResponse: true,
      }).then((res) => {
        setAccessToken(res.access_token);
        setIdToken(res.id_token);
      });
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        idToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
