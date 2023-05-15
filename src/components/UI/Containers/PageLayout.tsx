import { PropsWithChildren } from "react";
import { useMatchTablet } from "../../../main";
import Header from "../Blocks/Header";
import s from "./PageLayout.module.scss";
import Navbar from "../../Navbar/Navbar";

interface PageLayoutProps extends PropsWithChildren {
  rotation?: "row" | "column";
  mobileHeaderTitle?: string;
	withNavbarOn?: 'all' | 'tablet'
}

const PageLayout = ({
  children,
  rotation = "column",
  mobileHeaderTitle,
	withNavbarOn
}: PageLayoutProps) => {
  const tabletMatch = useMatchTablet();

  return (
    <div className={`${s.main} ${s[rotation]}`}>
      {mobileHeaderTitle && !tabletMatch && (
        <Header title={mobileHeaderTitle} />
      )}
			{withNavbarOn == 'all' && <Navbar />}
			{withNavbarOn == 'tablet' && tabletMatch && <Navbar />}
      {children}
    </div>
  );
};

export default PageLayout;
