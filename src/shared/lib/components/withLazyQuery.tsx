/* eslint-disable react/display-name */
import {
  lazy,
  Suspense,
  useMemo,
  useState,
  type ComponentType,
  type PropsWithChildren,
} from 'react'

import { useQuery, type UseQueryOptions } from 'react-query'
import GridSkeletonLoader, {
  type GridSkeletonLoaderProps,
} from 'shared/ui/Loaders/GridSkeletonLoader'

export default <C extends { ref?: undefined }>(
  componentCallback: Parameters<typeof lazy>[0],
  queryOptions: UseQueryOptions,
  skeletonOptions: GridSkeletonLoaderProps
) => {
  const LazyComponent = lazy<ComponentType<C>>(componentCallback)

  return (props: C) => {
    const query = useQuery(queryOptions)
    const [isInit, setInit] = useState(false)

    const skeleton = useMemo(
      () => <GridSkeletonLoader {...skeletonOptions} />,
      []
    )

    if (isInit && query.isLoading) return skeleton

    return (
      <Suspense fallback={skeleton}>
        <InitComponent isInit={isInit} onInit={setInit}>
          <LazyComponent {...props} />
        </InitComponent>
      </Suspense>
    )
  }
}

interface InitComponentProps extends PropsWithChildren {
  onInit: (val: boolean) => void
  isInit: boolean
}
const InitComponent = ({ isInit, onInit, children }: InitComponentProps) => {
  if (!isInit) {
    onInit(true)
  }

  return <>{children}</>
}
