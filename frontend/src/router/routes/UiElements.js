import { lazy } from 'react'

const Icons = lazy(() => import('../../views/ui-elements/icons'))

const UiElementRoutes = [
  {
    element: <Icons />,
    path: '/icons/reactfeather'
  }
]

export default UiElementRoutes
