import { ReactNode } from "react";
import FooterMain from "./footer/Footer";
import Header from "./header/Header";

export type LayoutProps = {
    children: ReactNode;
};
const MainLayout = ({ children }: LayoutProps) => {
    return (
      <>
        <Header/>
        <FooterMain/>
      </>
    );
  };

export default MainLayout;


