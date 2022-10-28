import { lazy } from 'react'

const BoxedLayout = lazy(() => import('../../views/ui-elements/page-layouts/BoxedLayout'))
const WithoutMenu = lazy(() => import('../../views/ui-elements/page-layouts/WithoutMenu'))
const LayoutEmpty = lazy(() => import('../../views/ui-elements/page-layouts/LayoutEmpty'))
const LayoutBlank = lazy(() => import('../../views/ui-elements/page-layouts/LayoutBlank'))

const PageLayoutRoutes = [
  {
    element: <BoxedLayout />,
    path: '/page-layout/layout-boxed',
    meta: {
      contentWidth: 'boxed'
    }
  },
  {
    element: <WithoutMenu />,
    path: '/page-layout/without-menu',
    meta: {
      menuHidden: true
    }
  },
  {
    element: <LayoutEmpty />,
    path: '/page-layout/layout-empty'
  },
  {
    element: <LayoutBlank />,
    path: '/page-layout/layout-blank',
    meta: {
      layout: 'blank'
    }
  }
]

export default PageLayoutRoutes
