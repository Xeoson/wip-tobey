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

export default <Props, ReturnType = any>(
  componentCallback: Parameters<typeof lazy>[0],
  queryOptions: UseQueryOptions<ReturnType, unknown, ReturnType, string[]> & {
    queryKey: string[]
  },
  skeletonOptions: GridSkeletonLoaderProps
) => {
  const LazyComponent = lazy(componentCallback)

  return (props: Omit<Props, 'data'> & { queryKey: string }) => {
    const { data, isLoading, isError } = useQuery({
      ...queryOptions,
      queryKey: [...queryOptions.queryKey, props.queryKey],
    })
    const [isInit, setInit] = useState(false)

    const skeleton = useMemo(
      () => <GridSkeletonLoader {...skeletonOptions} />,
      []
    )

    if (isInit && isLoading) return skeleton
    if (isError) return <Text styles={{}}>Something went wrong -_0</Text>
    if (!data && !isLoading) return <Text styles={{}}>No data found</Text>

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
