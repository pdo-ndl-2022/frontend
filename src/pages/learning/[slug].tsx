import { styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StretchedBox } from "../../components/stretched-box.component";
import { useAuth } from "../../hooks/useAuth.hook";
import { getArticleBySlug } from "../../services/article.service";

const FooSlug = () => {
  const Root = styled("div")(({ theme }) => ({
    padding: theme.spacing(4, 2),
    width: "100%",
  }));

  const Header = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }));

  const Thumbnail = styled("div")(({ theme }) => ({
    padding: theme.spacing(4, 2),
  }));

  const Image = styled("img")(({ theme }) => ({
    borderRadius: "16px",
    maxHeight: "400px",
    minWidth: "100%",
    objectFit: "cover",
  }));

  const Content = styled("div")(({ theme }) => ({
    padding: theme.spacing(4, 2),
  }));

  const router = useRouter();
  const { slug } = router.query;
  const auth = useAuth();

  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticleBySlug(auth, slug as string)
         .then((res) => setArticle(res))
         .catch((err) => console.log(err));
  }, [])

  console.log(article)

  return (
    <Root>
      <StretchedBox>
        <Header>
          <Typography variant="h3">Lottie by Airbnb</Typography>
          <Typography variant="body1">
            Embed animations on your sites has never been easier. Thanks Airbnb
            for creating Lottie! And ng-lottie to manage it by Angular.
          </Typography>
        </Header>
        <Thumbnail>
          <Image src="https://media-exp1.licdn.com/dms/image/C4D03AQGf5S8l8DZECQ/profile-displayphoto-shrink_800_800/0/1632682851519?e=2147483647&v=beta&t=n9aSfbdAkYywrMJvZjUqgsj8rCZxzS6s_AddqZasF3M" />
        </Thumbnail>
        <Content>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum recusandae incidunt dolores iusto consequatur, maxime explicabo nemo, natus illo error? Labore enim, exercitationem dolorum possimus atque harum. Saepe, commodi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eligendi rem pariatur omnis, ab perferendis similique ipsum dolores maxime culpa tempora, quisquam officia voluptatum, sapiente consectetur. Veritatis consequatur autem suscipit?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolores ratione molestiae obcaecati commodi accusamus laborum quibusdam provident, praesentium atque omnis iste esse nobis, quisquam quidem eveniet. Accusamus, consequuntur cumque!
        </Content>
      </StretchedBox>
    </Root>
  );
};

export default FooSlug;
