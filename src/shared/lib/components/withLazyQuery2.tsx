/* eslint-disable react/display-name */
import {
  lazy,
  Suspense,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

import { useQuery, type UseQueryOptions } from 'react-query'
import Text from '@/shared/kit/ui/Text/Text'
import GridSkeletonLoader, {
  type GridSkeletonLoaderProps,
} from '@/shared/ui/Loaders/GridSkeletonLoader'

export default <ReturnType, C extends { ref?: undefined }>(
  componentCallback: Parameters<typeof lazy>[0],
  queryOptions: UseQueryOptions<ReturnType>,
  skeletonOptions: GridSkeletonLoaderProps
) => {
  const LazyComponent = lazy(componentCallback)

  return (props: C) => {
    const { data, isLoading, error } = useQuery(queryOptions)
    const [isInit, setInit] = useState(false)

    const skeleton = useMemo(
      () => <GridSkeletonLoader {...skeletonOptions} />,
      []
    )

    if (isInit && isLoading) return skeleton
    if (error) return <Text styles={{}}>{JSON.stringify(error)}</Text>

    return (
      <Suspense fallback={skeleton}>
        <InitComponent isInit={isInit} onInit={setInit}>
          <LazyComponent {...props} data={data} />
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
