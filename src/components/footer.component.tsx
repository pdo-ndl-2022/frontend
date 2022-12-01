import { styled, Typography } from "@mui/material";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 4),
  height: "200px",
  marginTop: theme.spacing(8),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body1">Footer</Typography>
    </StyledFooter>
  );
};
