import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const PageSection = ({ children }: PropsWithChildren) => {
  return (
    <Box
      component="section"
      sx={{
        padding: [0, 4],
      }}
    >
      {children}
    </Box>
  );
};
