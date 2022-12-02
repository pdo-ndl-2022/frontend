import { Box, Button, Paper, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth.hook";
import { getQcms } from "../services/quiz.service";
import { Qcm } from "../types/quiz.types";

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

const StyledElement = styled(Stack)(({ theme }) => ({
  gridColumn: "span 2",
  [theme.breakpoints.down("sm")]: {
    gridColumn: "span 1",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
}));

const Element = (qcm: Qcm) => {
  return (
    <StyledElement
      direction="column"
      sx={{
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          borderRadius: 1,
          overflow: "hidden",
        }}
      >
        <StyledImg src="https://cataas.com/cat" />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            width: "100%",
            padding: (theme) => theme.spacing(0.5),
          }}
        >
          {qcm.title} ({qcm.category})
        </Typography>
      </Box>
    </StyledElement>
  );
};

const Card = styled(Paper)(({ theme }) => ({
  gridColumn: "span 3",
  gridRow: "span 2",
  [theme.breakpoints.down("sm")]: {
    gridColumn: "span 2",
  },
}));

export const ElementGroupPreview = () => {
  const [qcms, setQcms] = useState<Qcm[]>([]);
  const auth = useAuth();

  useEffect(() => {
    if (auth.accessToken && auth.idToken) {
      fetch();
    }
  }, [auth]);

  const fetch = async () => {
    const res = await getQcms(auth);
    setQcms(res as unknown as Qcm[]);
  };

  return (
    <Root>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          paddingLeft: 4,
          paddingRight: 4,
          paddingBottom: 2,
        }}
      >
        <Button sx={{}} variant="outlined">
          More
        </Button>
      </Card>
      {qcms &&
        qcms.map((qcm, i) => (
          <Element
            id={qcm.id}
            title={qcm.title}
            category={qcm.category}
            key={i}
          ></Element>
        ))}
    </Root>
  );
};
