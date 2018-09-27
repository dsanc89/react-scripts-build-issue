// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'

import App from './app/index'
import ErrorBoundary from './app/ErrorBoundary'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  (document.getElementById('root'): any)
)
registerServiceWorker()
