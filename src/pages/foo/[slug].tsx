import { Button } from "@mui/material";
import { useRouter } from "next/router";

const FooSlug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <h1>Foo {slug}</h1>;
};

export default FooSlug;
