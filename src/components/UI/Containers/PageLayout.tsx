import { type PropsWithChildren, Suspense, lazy } from "react"
import { useMatchTablet } from "../../../main"
import Header from "../Blocks/Header"
import s from "./PageLayout.module.scss"
import Navbar from "../../Navbar/Navbar"

interface PageLayoutProps extends PropsWithChildren {
  mobileHeaderTitle?: string
  withNavbarOn?: 'all' | 'tablet'
}

const TabBar = lazy(async () => await import('../../TabBar/TabBar'))

const PageLayout = ({
  children,
  mobileHeaderTitle,
  withNavbarOn
}: PageLayoutProps) => {
  const tabletMatch = useMatchTablet()

  return (
    <div className={s.main}>
      {mobileHeaderTitle && !tabletMatch && (
        <Header title={mobileHeaderTitle} />
      )}
      {withNavbarOn === "all" && <Navbar />}
      {withNavbarOn === "tablet" && tabletMatch && <Navbar />}
      {children}
      {!tabletMatch && (
        <Suspense fallback={null}>
          <TabBar />
        </Suspense>
      )}
    </div>
  )
}

export default PageLayout
