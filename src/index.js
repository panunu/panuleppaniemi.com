import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import {
  initPlasmicLoader,
  PlasmicRootProvider,
  PlasmicComponent,
} from '@plasmicapp/loader-react'

const pageInPlasmic = 'Root'
const loader = initPlasmicLoader({
  projects: [
    {
      id: process.env.REACT_APP_PLASMIC_ID,
      token: process.env.REACT_APP_PLASMIC_TOKEN,
    },
  ],
  preview: process.env.REACT_APP_PLASMIC_PREVIEW || false,
})

const Page = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async function load() {
      const dataFromPlasmic = await loader.maybeFetchComponentData(
        pageInPlasmic
      )

      setData(dataFromPlasmic)
    })()
  }, [])

  if (!data) {
    return (
      <div id="loader">
        <div></div>
      </div>
    )
  }

  return <PlasmicComponent component={pageInPlasmic} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PlasmicRootProvider loader={loader}>
    <Page />
  </PlasmicRootProvider>
)
