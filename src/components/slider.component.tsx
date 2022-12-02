import { Box, lighten, Paper, Stack, styled, Typography } from "@mui/material";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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

const SliderCard = () => {
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
          variant="body1"
          sx={{
            width: "100%",
            padding: (theme) => theme.spacing(0.5),
          }}
        >
          Quizz
        </Typography>
      </Box>
    </Stack>
  );
};

export const SidoSwiper = () => {
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
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <SwiperSlide key={i}>
            <SliderCard />
          </SwiperSlide>
        ))}
    </StyledSwiper>
  );
};
