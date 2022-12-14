import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { AppProps } from "next/app";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import { Box, Button, CssBaseline } from "@mui/material";
import { PaletteMode } from "@mui/material";
import {
  Auth0Provider,
  Auth0ProviderOptions,
  useAuth0,
} from "@auth0/auth0-react";

import { createContext, useEffect, useMemo, useState } from "react";

import { breakpoints } from "../styles/theme/breakpoints";
import { ComponentsOverrides } from "../styles/theme/overrides";
import getPalette from "../styles/theme/palette.config";
import { shape } from "../styles/theme/shapes";
import { typography } from "../styles/theme/typography.config";
import { getConfig } from "../utils/auth/config";
import { useRouter } from "next/router";
import { MainLayout } from "../layouts/main.layout";
import { LoadingLayout } from "../layouts/loading.layout";
import { AuthProvider } from "../contexts/Auth.context";
import { LoginLayout } from "../layouts/login.layout";

const ColorModeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const config = getConfig();
  const router = useRouter();

  const onRedirectCallback = (appState: any) => {
    router.push(
      appState && appState.returnTo ? appState.returnTo : config.callback
    );
  };

  const providerConfig: Auth0ProviderOptions = {
    domain: config.domain,
    clientId: config.clientId,
    redirectUri: config.callback,
    onRedirectCallback,
  };

  const [mode, setMode] = useState<PaletteMode>("light");

  useEffect(() => {
    let m = localStorage.getItem("mode");
    if (m) setMode(m as PaletteMode);
    else localStorage.setItem("mode", mode);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          let m = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("mode", m);
          return m as PaletteMode;
        });
      },
    }),
    []
  );

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      palette: getPalette(mode),
      shape,
      typography,
      breakpoints,
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  if (!isLoading) return <LoadingLayout />;

  return (
    <Auth0Provider {...providerConfig}>
      <AuthProvider>
        <ColorModeContext.Provider value={{ mode, ...colorMode }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              </ThemeProvider>
            </StyledEngineProvider>
          </LocalizationProvider>
        </ColorModeContext.Provider>
      </AuthProvider>
    </Auth0Provider>
  );
}
