import { styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { StretchedBox } from "../../components/stretched-box.component";

const FooSlug = () => {
  const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(4, 2),
    width: '100%'
  }));

  const router = useRouter();
  const { slug } = router.query;
  return (
    <Root>
      <StretchedBox>
        <Typography variant="h3">Lottie by Airbnb</Typography>
        <Typography variant="body1">Embed animations on your sites has never been easier. Thanks Airbnb for creating Lottie! And ng-lottie to manage it by Angular.</Typography>
      </StretchedBox>
    </Root>
  );
};

export default FooSlug;
