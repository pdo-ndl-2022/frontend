import { Box, lighten, Paper, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAuth } from "../hooks/useAuth.hook";
import { getArticles } from "../services/article.service";
import { Article } from "../types/article.type";

const Card = styled(Paper)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
  height: "120px",
  overflow: "hidden",
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "1500px",
  margin: "0 auto",
}));

const StyledImg = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
}));

const SliderCard = ({ article }: { article: Article }) => {
  return (
    <Stack
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
          height: "350px",
        }}
      >
        <StyledImg
          src={article.attributes.thumbnail.data.attributes.url || ""}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            width: "100%",
            padding: (theme) => theme.spacing(0.5),
          }}
        >
          {article?.attributes?.title}
        </Typography>
      </Box>
    </Stack>
  );
};

export const SidoSwiper = () => {
  const auth = useAuth();
  const [articles, setArticles] = useState<Article[]>();
  useEffect(() => {
    getArticles(auth)
      .then((res: any) => setArticles(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledSwiper
      style={{
        padding: "40px 0",
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={25}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 1.5,
        },
        1200: {
          slidesPerView: 2.25,
        },
      }}
    >
      {(articles || []).map((article, i) => (
        <SwiperSlide key={i}>
          <SliderCard article={article} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};
