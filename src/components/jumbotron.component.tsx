import { Stack, styled, Typography } from "@mui/material";
import { LeaderBoard } from "./leader-board.component";
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

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
}));

export const Jumbotron = () => {
  return (
    <Root>
      <StretchedBox
        sx={{
          overflow: "hidden",
          border: (theme) => `solid 4px ${theme.palette.primary.main}`,
        }}
      >
        <StyledImg src="jumbotron_sidaction.jpg" />
      </StretchedBox>
      <LeaderBoard />
    </Root>
  );
};
