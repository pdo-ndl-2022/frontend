import { Stack, styled, Typography } from "@mui/material";
import { StretchedBox } from "./stretched-box.component";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(4, 2),
  display: "grid",
  margin: "0 auto",
  gridTemplateColumns: "2fr 1fr",
  gridTemplateRows: "400px",
  gap: theme.spacing(2),
  maxWidth: "1200px",
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
