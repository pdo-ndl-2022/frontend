import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { useEffect } from "react";

export const Header = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    console.log("user", user, isAuthenticated);
  }, [user]);

  return (
    <header>
      <h1>Header</h1>
      <Button onClick={() => loginWithRedirect()}>Login</Button>
    </header>
  );
};
