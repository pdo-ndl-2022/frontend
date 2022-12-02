import {
  Box,
  Paper,
  PaperProps,
  styled,
  SxProps,
  Typography,
} from "@mui/material";
import { PropsWithChildren } from "react";

export const StretchedBox = ({
  children,
  ...props
}: PropsWithChildren<PaperProps>) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: "100%",
        height: "100%",
        padding: 2,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};
