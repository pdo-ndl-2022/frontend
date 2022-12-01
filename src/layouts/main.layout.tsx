import { PropsWithChildren } from "react";
import { Footer } from "../components/footer.component";
import { Header } from "../components/header.component";

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
