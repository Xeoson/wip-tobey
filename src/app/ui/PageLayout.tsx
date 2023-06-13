import { Suspense, lazy, type PropsWithChildren, memo } from 'react'
import Header from 'shared/ui/Blocks/Header'
import Navbar from '../../widgets/Navbar/ui/Navbar'
import s from './PageLayout.module.scss'
import { useMatchTablet } from 'app/lib/const'

interface PageLayoutProps extends PropsWithChildren {
  mobileHeaderTitle?: string
  withNavbarOn?: 'all' | 'tablet'
}

const TabBar = lazy(async () => await import('../../shared/ui/Blocks/TabBar'))

const PageLayout = ({
  children,
  mobileHeaderTitle,
  withNavbarOn,
}: PageLayoutProps) => {
  const tabletMatch = useMatchTablet()

  return (
    <div className={s.main}>
      {mobileHeaderTitle && !tabletMatch && (
        <Header title={mobileHeaderTitle} />
      )}
      {withNavbarOn === 'all' && <Navbar />}
      {withNavbarOn === 'tablet' && tabletMatch && <Navbar />}
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
