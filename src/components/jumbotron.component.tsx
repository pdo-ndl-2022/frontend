import { Stack, styled, Typography } from "@mui/material";
import { StretchedBox } from "./stretched-box.component";

const Root = styled("div")(({ theme }) => ({
  display: "grid",
  margin: "0 auto",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateRows: "400px",
  gap: theme.spacing(2),
  maxWidth: "1200px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const Jumbotron = () => {
  return (
    <Root>
      <StretchedBox>
        <Typography variant="body2">Element 1</Typography>
      </StretchedBox>
      <StretchedBox>
        <Typography variant="body2">Element 2</Typography>
      </StretchedBox>
    </Root>
  );
};
