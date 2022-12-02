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
    <StyledFooter style={
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }
    }>
      <Typography>
        Ce site a été réalisé par les étudiants de Polytech Montpellier en 5ème année de cycle ingénieur DevOps.
      </Typography>
      <Typography>
      Message adressé aux sponsors : Nous organisons une conférence sur le thème du Cloud et du Devops en mai, consultez le site de 
        <a href="https://polycloud.fr/"> PolyCloud</a> pour plus d'informations. 
      </Typography>
    </StyledFooter>
  );
};
