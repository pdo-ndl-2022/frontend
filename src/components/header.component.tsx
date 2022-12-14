import { useAuth0 } from "@auth0/auth0-react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material";
import { Children, PropsWithChildren, useEffect, useState } from "react";
import { Logo } from "./logo.component";

const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 4),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Header = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLouout = () => {
    logout();
    handleClose();
  };

  const Nav = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  return (
    <StyledHeader>
      <Nav>
        <Logo />
        <MuiLink component={Link} href="/learning" underline="none" color="primary">
          Blog
        </MuiLink>
      </Nav>
      <Box>
        {!isAuthenticated && (
          <Button onClick={() => loginWithRedirect()}>Login</Button>
        )}
        {isAuthenticated && (
          <IconButton onClick={handleClick}>
            <Avatar alt={user?.nickname} src={user?.picture} />
          </IconButton>
        )}
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem disabled={true} onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleLouout}>Logout</MenuItem>
      </Menu>
    </StyledHeader>
  );
};
