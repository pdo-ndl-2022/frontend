import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export const PageSection = ({
  children,
  gap = true,
}: PropsWithChildren<{ gap?: boolean }>) => {
  return (
    <Box
      component="section"
      sx={{
        boxSizing: "border-box",
        ...{
          pl: {
            xs: 2,
            md: 4,
          },
          pr: {
            xs: 2,
            md: 4,
          },
        },
        pt: {
          xs: 8,
          md: 16,
        },
        bp: {
          xs: 8,
          md: 16,
        },
      }}
    >
      {children}
    </Box>
  );
};
