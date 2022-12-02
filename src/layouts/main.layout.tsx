import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/system";
import { PropsWithChildren } from "react";
import { CookiesBar } from "../components/cookiesBar/cookieBar.component";
import { Footer } from "../components/footer.component";
import { Header } from "../components/header.component";
import { LoginLayout } from "./login.layout";

const StyledMain = styled("main")({
  minHeight: "100vh",
});

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <LoginLayout />;
  }
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
      <CookiesBar />
    </>
  );
};
