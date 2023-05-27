import Error from 'pages/Error/Error'
import React, { type ErrorInfo, type ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

interface IState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): IState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('error', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return <Error />
    }

    return this.props.children
  }
}
