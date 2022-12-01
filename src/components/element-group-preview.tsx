import { Paper, styled, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const Root = styled("header")(({ theme }) => ({
  display: "grid",
  margin: "0 auto",
  maxWidth: "1200px",
  gap: theme.spacing(2),
  gridTemplateColumns: "repeat(9, 1fr)",
  gridTemplateRows: "repeat(2, 120px)",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(7, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(3, 120px)",
  },
}));

const Element = styled(Paper)(({ theme }) => ({
  gridColumn: "span 2",
  [theme.breakpoints.down("sm")]: {
    gridColumn: "span 1",
  },
}));

const Card = styled(Paper)(({ theme }) => ({
  gridColumn: "span 3",
  gridRow: "span 2",
  [theme.breakpoints.down("sm")]: {
    gridColumn: "span 2",
  },
}));

export const ElementGroupPreview = () => {
  const sm = useMediaQuery("(max-width:600px)");
  const md = useMediaQuery("(max-width:900px)");
  const gtMd = useMediaQuery("(min-width:901px)");

  const [count, setCount] = useState(6);

  useEffect(() => {
    if (gtMd) {
      setCount(6);
    }
    if (md) {
      setCount(4);
    }
    if (sm) {
      setCount(2);
    }
  }, [sm, md, gtMd]);

  return (
    <Root>
      <Card variant="outlined" />
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Element key={i} variant="outlined"></Element>
        ))}
    </Root>
  );
};
