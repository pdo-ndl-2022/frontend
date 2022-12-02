import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";
import { getArticles } from "../../services/article.service";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth.hook";
import { Article } from "../../types/article.type";
import { environment } from "../../environments/environment";

const Learning = () => {
  const auth = useAuth();

  const [articles, setArticles] = useState<Article[]>();
  useEffect(() => {
    getArticles(auth)
         .then((res:any) => setArticles(res.data))
         .catch((err) => console.log(err));
  }, [])

  return (
    <Container sx={{ margin: "16px" }}>
      <Grid container spacing={3}>
        {articles?.map((article: Article, index: number) => (
          <Grid item xs={3} key={index}>  
            <Card sx={{ maxWidth: 345 }}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} href={`/learning/${encodeURIComponent(article.attributes.slug!)}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`${environment.api.articlesRoot}${article.attributes.thumbnail.data.attributes.url}`}
                  alt="thumbnail"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.attributes.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.attributes.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Learning;
