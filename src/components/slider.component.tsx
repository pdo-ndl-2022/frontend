import { Paper, styled } from "@mui/material";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "120px",
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "1500px",
  margin: "0 auto",
}));

export const SidoSwiper = () => {
  return (
    <StyledSwiper
      style={{
        padding: "40px 0",
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={18}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1.25,
        },
        400: {
          slidesPerView: 2.25,
        },
        900: {
          slidesPerView: 4.25,
        },
        1200: {
          slidesPerView: 5.25,
        },
        1536: {
          slidesPerView: 6.25,
        },
      }}
    >
      <SwiperSlide>
        <Card variant="outlined">Slide 1</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card variant="outlined">Slide 2</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card variant="outlined">Slide 3</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card variant="outlined">Slide 4</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card variant="outlined">Slide 5</Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card variant="outlined">Slide 6</Card>
      </SwiperSlide>
    </StyledSwiper>
  );
};
