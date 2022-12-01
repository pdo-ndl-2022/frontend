import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Callback = () => {
  const { isLoading, error } = useAuth0();
  const router = useRouter();
  const { returnTo } = router.query;

  useEffect(() => {
    router.push("/");
  }, [router]);
};

export default Callback;
