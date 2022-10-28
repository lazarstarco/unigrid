// ** Icons Import
import { Server, Grid, Circle, Share2 } from 'react-feather'

export default [
  {
    id: 'dataTable',
    title: 'Network',
    icon: <Share2 size={20} />,
    children: [
      {
        id: 'dtBasic',
        title: 'Students',
        icon: <Circle size={12} />,
        navLink: '/network/students'
      },
      {
        id: 'dtAdvance',
        title: 'Professors',
        icon: <Circle size={12} />,
        navLink: '/network/professors'
      }
    ]
  }
]
