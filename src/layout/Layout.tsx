import { ReactNode } from "react";
import FooterMain from "./footer/Footer";

export type LayoutProps = {
    children: ReactNode;
};
const MainLayout = ({ children }: LayoutProps) => {
    return (
      <>
        <FooterMain/>
      </>
    );
  };

export default MainLayout;


