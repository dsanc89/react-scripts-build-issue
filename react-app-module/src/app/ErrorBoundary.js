// @flow
import * as React from 'react'
import App from './index'

type State = {
  error: any
}

type Prop = {
  children: React.Element<typeof App>
}

class ErrorBoundary extends React.Component<Prop, State> {
  state = {
    error: null
  }

  componentDidCatch (error: any) {
    this.setState({error})
  }

  render () {
    if (!this.state.error) return this.props.children

    return (
        <div id='error-container'>
          <p>Something went wrong</p>
          <p>
            We'll work on it
          </p>
        </div>
    )
  }
}

export default ErrorBoundary
