import { styled } from "@mui/system";
import { PropsWithChildren } from "react";
import { Footer } from "../components/footer.component";
import { Header } from "../components/header.component";

const StyledMain = styled("main")({
  minHeight: "100vh",
});

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};
