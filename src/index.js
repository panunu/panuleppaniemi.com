import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
} from '@plasmicapp/loader-react'

const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.REACT_APP_PLASMIC_ID,
      token: process.env.REACT_APP_PLASMIC_TOKEN,
    },
  ],
  preview: process.env.REACT_APP_PLASMIC_PREVIEW || false,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlasmicRootProvider loader={PLASMIC}>
    <PlasmicComponent component="Root" />
  </PlasmicRootProvider>
)
