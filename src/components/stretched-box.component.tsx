import { Box, Paper, styled, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const StretchedBox = ({ children }: PropsWithChildren) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: "100%",
        height: "100%",
        padding: 2,
      }}
    >
      {children}
    </Paper>
  );
};
