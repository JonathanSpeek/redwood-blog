import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import netlifyIdentity from 'netlify-identity-widget'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import './spacegrid.min.css'

const isAuthEnabled = true

if (isAuthEnabled) {
  window.netlifyIdentity = netlifyIdentity
  netlifyIdentity.init()
}

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
