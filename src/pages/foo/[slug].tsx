import { Button } from "@mui/material";
import { useRouter } from "next/router";

const FooSlug = () => {
  // const auth = useAuth();
  // const handleClick = () => {
  //   getQuiz(auth)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const router = useRouter();
  const { slug } = router.query;
  return <h1>Foo {slug}</h1>;
};

export default FooSlug;
