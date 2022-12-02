import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/system";
import { PropsWithChildren } from "react";
import { Footer } from "../components/footer.component";
import { Header } from "../components/header.component";
import { LoginLayout } from "./login.layout";

const StyledMain = styled("main")({
  minHeight: "100vh",
});

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const { isLoading, isAuthenticated, user } = useAuth0();

  if (!isAuthenticated) {
    return <LoginLayout />;
  }
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};
