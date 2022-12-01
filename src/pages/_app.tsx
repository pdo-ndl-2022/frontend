import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { PaletteMode } from "@mui/material";
// import AdapterDayJs from "@mui/lab/AdapterDayjs";

import { createContext, useEffect, useMemo, useState } from "react";

import { breakpoints } from "../styles/theme/breakpoints";
import { ComponentsOverrides } from "../styles/theme/overrides";
import getPalette from "../styles/theme/palette.config";
import { shape } from "../styles/theme/shapes";
import { typography } from "../styles/theme/typography.config";

const ColorModeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
});

export default function App({ Component, pageProps }: AppProps) {
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

  return (
    <ColorModeContext.Provider value={{ mode, ...colorMode }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StyledEngineProvider>
      </LocalizationProvider>
    </ColorModeContext.Provider>
  );
}
