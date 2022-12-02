import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Divider, Typography } from "@mui/material";
export const LoginLayout = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Typography variant="h1">Se connecter à Sido</Typography>

      <Button variant="contained" onClick={() => loginWithRedirect()}>
        Log in
      </Button>
    </Box>
  );
};
