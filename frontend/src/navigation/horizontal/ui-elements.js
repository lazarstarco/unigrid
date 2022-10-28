// ** Icons Import
import { Layers, Type, Eye, CreditCard, Circle, Briefcase, Box, Layout } from 'react-feather'

export default [
  {
    id: 'uiElements',
    title: 'User Interface',
    icon: <Layers />,
    children: [
      {
        id: 'feather',
        title: 'Feather',
        icon: <Eye />,
        navLink: '/icons/reactfeather'
      },
      {
        id: 'components',
        title: 'Components',
        icon: <Briefcase />,
        children: [
          {
            id: 'listGroup',
            title: 'List Group',
            icon: <Circle />,
            navLink: '/components/list-group'
          },
          {
            id: 'navsComponent',
            title: 'Navs Component',
            icon: <Circle />,
            navLink: '/components/nav-component'
          },
          {
            id: 'pillBadges',
            title: 'Pill Badges',
            icon: <Circle />,
            navLink: '/components/pill-badges'
          },
          {
            id: 'pillsComponent',
            title: 'Pills Component',
            icon: <Circle />,
            navLink: '/components/pills-component'
          },
          {
            id: 'react-hot-toasts',
            title: 'React Hot Toasts',
            icon: <Circle />,
            navLink: '/components/react-hot-toasts'
          }
        ]
      },
      {
        id: 'pageLayouts',
        title: 'Page Layouts',
        icon: <Layout />,
        children: [
          {
            id: 'layoutBoxed',
            title: 'Layout Boxed',
            icon: <Circle />,
            navLink: '/page-layout/layout-boxed'
          },
          {
            id: 'withoutMenu',
            title: 'Without Menu',
            icon: <Circle />,
            navLink: '/page-layout/without-menu'
          },
          {
            id: 'layoutEmpty',
            title: 'Layout Empty',
            icon: <Circle />,
            navLink: '/page-layout/layout-empty'
          },
          {
            id: 'layoutBlank',
            title: 'Layout Blank',
            icon: <Circle />,
            navLink: '/page-layout/layout-blank'
          }
        ]
      }
    ]
  }
]
