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
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
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
