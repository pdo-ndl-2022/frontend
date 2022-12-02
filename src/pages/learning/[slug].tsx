import { styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StretchedBox } from "../../components/stretched-box.component";
import { environment } from "../../environments/environment";
import { useAuth } from "../../hooks/useAuth.hook";
import { getArticleBySlug } from "../../services/article.service";
import { Article } from "../../types/article.type";

const ArticleSlug = () => {
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

  const [article, setArticle] = useState<Article>();
  useEffect(() => {
    if (slug) {
      getArticleBySlug(auth, slug as string)
        .then((res: any) => {
          setArticle(res.data[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [slug]);

  return (
    <Root>
      <StretchedBox>
        <Header>
          <Typography variant="h3">{article?.attributes.title}</Typography>
          <Typography variant="body1">
            {article?.attributes.description}
          </Typography>
        </Header>
        <Thumbnail>
          <Image src={`${environment.api.articlesRoot}${article?.attributes.thumbnail.data.attributes.url}`}
 />
        </Thumbnail>
        <Content dangerouslySetInnerHTML={{ __html: article?.attributes.content || ''}} />
      </StretchedBox>
    </Root>
  );
};

export default ArticleSlug;
