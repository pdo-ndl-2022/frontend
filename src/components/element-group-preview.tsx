import { Paper, styled } from "@mui/material";

const Root = styled("header")(({ theme }) => ({
  display: "grid",
  margin: "0 auto",
  maxWidth: "1200px",
  gap: theme.spacing(2),
  gridTemplateColumns: "repeat(9, 1fr)",
  gridTemplateRows: "repeat(2, 120px)",
}));

const Element = styled(Paper)(({ theme }) => ({
  gridColumn: "span 2",
}));

const Card = styled(Paper)(({ theme }) => ({
  gridColumn: "span 3",
  gridRow: "span 2",
}));

export const ElementGroupPreview = () => {
  return (
    <Root>
      <Card variant="outlined" />
      <Element variant="outlined"></Element>
      <Element variant="outlined"></Element>
      <Element variant="outlined"></Element>
      <Element variant="outlined"></Element>
      <Element variant="outlined"></Element>
      <Element variant="outlined"></Element>
    </Root>
  );
};
