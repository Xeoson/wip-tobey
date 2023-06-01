/* eslint-disable react/display-name */
import { type FC } from 'react'
import ReducerLoader, { type ReducerLoaderProps } from './ReducerLoader'

export type WithReducerLoaderType<P> = { Component: FC<P> } & ReducerLoaderProps

const withReducerLoader = <P extends Record<string, any>>({
  Component,
  reducers,
  removeOnUnmount,
}: WithReducerLoaderType<P>) => {
  return (props: P) => (
    <ReducerLoader reducers={reducers} removeOnUnmount={removeOnUnmount}>
      <Component {...props} />
    </ReducerLoader>
  )
}

export default withReducerLoader
