import { CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const LoadingLayout = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Typography variant="h5">
        <CircularProgress color="primary" />
      </Typography>
    </Stack>
  );
};
