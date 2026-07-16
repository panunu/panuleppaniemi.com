import { createContext } from 'react'

export type Preview = { src: string; alt: string } | null

// Work links push their image here; Site renders it next to the cursor.
export const PreviewContext = createContext<(preview: Preview) => void>(
  () => {}
)
